var request = require('request');
var async = require('async');

module.exports.run = async (client, message, args) => {
  // LES VARIABLES
  var data = {}
  var api_key = process.env.RIOTAPI || process.argv[2]
  if (!api_key) {
  console.log('L\'url n\'existe pas!')
  }
  var s_toSearch = args.slice('lols').join(' ')
  var URLtoSearch = 'https://euw1.api.riotgames.com/lol/summoner/v3/summoners/by-name/' + s_toSearch + '?api_key=' + api_key
  var URLforVersion = 'https://ddragon.leagueoflegends.com/realms/euw.json'
  var URLServeurStatus = 'https://euw1.api.riotgames.com/lol/status/v3/shard-data?api_key=' + api_key


  // DEBUT DE L'AVENTURE
  async.waterfall([ // ON COMMENCE PAR UN ASYNC
    function(callback) { // ON CREER LA FUNCTION CALLBACK
      request(URLtoSearch, function(err, response, body) { // PREMIER REQUEST
        console.log('Premier Request')
        if(!err && response.statusCode == 200) { // SI Y'A PAS D'ERREUR
        var json = JSON.parse(body)
        // LA ON SET TOUTES LES INFOS
        data.profileIconId = json.profileIconId;
        data.name = json.name;
        data.summonerLevel = json.summonerLevel;
        data.revisionDate = json.revisionDate;
        data.id = json.id;
        data.accountId =  json.accountId;

        request(URLforVersion, function(err, response, body) { // DEUXIEME REQUEST
          console.log('Deuxieme request')
          if(!err && response.statusCode == 200) { // SI Y'A PAS D'ERREUR
          var objet = JSON.parse(body)
          // ON SET LES DONNES QU'ON VEUT UTILISER
          data.version = objet.v
          data.cdn = objet.cdn
          // ON FABRIQUE NOTRE PETITE URL POUR LE PROFILE ICON
          var URLtoIcon = data.cdn + '/' + data.version + '/img/profileicon/' + data.profileIconId + '.png'


              var URLNbMasteries = 'https://euw1.api.riotgames.com/lol/champion-mastery/v3/scores/by-summoner/'+ data.id + '?api_key=' + api_key
              var URLMasteriesChampion = 'https://euw1.api.riotgames.com/lol/champion-mastery/v3/champion-masteries/by-summoner/' + data.id + '?api_key=' + api_key
              request(URLNbMasteries, function(err, response, body) { // QUATRIEME REQUEST
                console.log('quatrieme request')
                if(!err && response.statusCode == 200) {
                  var obje = JSON.parse(body)
                  data.scoresMasteries = obje

                  var URLrank = 'https://euw1.api.riotgames.com/lol/league/v3/leagues/by-summoner/' + data.id + '?api_key=' + api_key
                  request(URLMasteriesChampion, function(err, response, body) { // CINQUIEME REQUEST
                    console.log('cinquieme request')
                    if(!err && response.statusCode == 200) {
                      var jsonObj = JSON.parse(body)
                      data.premierChamp = jsonObj[0]
                      data.deuxiemeChamp = jsonObj[1]
                      data.troisiemeChamp = jsonObj[2]

                      request(URLrank, function(err, response, body) { // SIZIEME REQUEST
                        console.log('sizieme request')
                        if(!err && response.statusCode == 200) {
                          var objJson = JSON.parse(body)
                          data.tier = objJson.tier
                          console.log(objJson.tier)
                          data.soloRankName = objJson.name
                          let indexRanking = objJson[0]
                          let summonerIdRank = data.id
                          let soloRankDivision = indexRanking.entries.find(post => post.playerOrTeamId === '' + summonerIdRank + '')
                          data.soloRankWins = soloRankDivision.wins
                          data.soloRankLosses = soloRankDivision.losses
                          data.soloRankLP = soloRankDivision.leaguePoints
                          data.soloRankDiv = soloRankDivision.rank

                          var URLChampions1 = 'https://euw1.api.riotgames.com/lol/static-data/v3/champions/' + data.premierChamp.championId + '?locale=fr_FR&tags=image&api_key=' + api_key
                          var URLChampions2 = 'https://euw1.api.riotgames.com/lol/static-data/v3/champions/' + data.deuxiemeChamp.championId + '?locale=fr_FR&tags=image&api_key=' + api_key
                          var URLChampions3 = 'https://euw1.api.riotgames.com/lol/static-data/v3/champions/' + data.troisiemeChamp.championId + '?locale=fr_FR&tags=image&api_key=' + api_key
                          request(URLChampions1, function(err, response, body) { // SEPTIEME REQUEST
                            console.log('septieme request')
                            if(!err && response.statusCode == 200) {
                              var jsonObjet = JSON.parse(body)
                              data.premierChampName = jsonObjet.name

                              request(URLChampions2, function(err, response, body) { // HUITIEME REQUEST
                                console.log('huitieme request')
                                if(!err && response.statusCode == 200) {
                                  var jsonObject = JSON.parse(body)
                                  data.deuxiemeChampName = jsonObject.name

                                  request(URLChampions3, function(err, response, body) { // NEUVIEME REQUEST
                                    console.log('neuvieme request')
                                    if(!err && response.statusCode == 200) {
                                      var objectJson = JSON.parse(body)
                                      data.troisiemeChampName = objectJson.name

                                      var premierChampURL = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/' + data.premierChampName + '.png'
                                      var deuxiemeChampURL = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/' + data.deuxiemeChampName + '.png'
                                      var troisiemeChampURL = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/' + data.troisiemeChampName + '.png'

                                      message.channel.send({embed: {
                                        author: {
                                          name: data.name,
                                          icon_url: URLtoIcon
                                        },
                                        color: 16428120,
                                        thumbnail: {
                                          "url": URLtoIcon
                                        },
                                        description: 'Voila les informations du compte **' + data.name + '**:',
                                        fields: [
                                          {
                                            name: 'Pseudo',
                                            value: data.name,
                                            inline: true
                                          },
                                          {
                                            name: 'Niveaux',
                                            value: data.summonerLevel,
                                            inline: true
                                          },
                                          {
                                            name: 'ID',
                                            value: data.id,
                                            inline: true
                                          },
                                          {
                                            name: 'Nombres de maîtrises',
                                            value: data.scoresMasteries,
                                            inline: true
                                          },
                                          {
                                            name: 'Top 3 des champions',
                                            value: '1er champion: ' + data.premierChampName + '\n2ème champion: ' + data.deuxiemeChampName + '\n3ème champion: ' + data.troisiemeChampName,
                                            inline: true
                                          },
                                          {
                                            name: 'Classement',
                                            value: data.tier + '' + data.soloRankDiv + ' ' + data.soloRankName,
                                            inline: true
                                          }
                                        ]
                                      }})
                                    } else {
                                      console.log(err)
                                    }

                                  }) // FIN DU NEUVIEME REQUEST
                                } else {
                                  console.log(err)
                                }
                              }) // FIN DU HUITIEME REQUEST

                            } else {
                              console.log(err)
                            }
                          }) // FIN DU SEPTIEME REQUEST

                        } else {
                          console.log(err)
                        }
                      }) // FIN DU SIZIEME REQUEST
                    } else {
                      console.log(err)
                    }
                  }) // FIN DU CINQUIEME REQUEST

                } else {
                  console.log(err)
                }
              }) // FIN DU QUATRIEME REQUEST

          } else {
          console.log(err)
          }
          }) // FIN DU DEUXIEME REQUEST
          callback(null, data) // LE P'PTIT CALLBACK
        } else {
          console.log(err)
        }
      }) // FIN DU PREMIER REQUEST
    } // FIN DE LA FONCTION CALLBACK
  ]
) // FIN DU ASYNC
} // FIN DU MODULE EXPORTS
