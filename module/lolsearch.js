var request = require('request');
var async = require('async');
const fs = require('fs');

module.exports.run = async (client, message, args) => {
  // LES VARIABLES
  var data = {}

  var api_key = process.env.RIOTAPI || process.argv[2] 
  if (!api_key) { 
  console.log('L\'api existe pas n\'existe pas!') 
  } 

  // VARIABLES POUR LES LIENS
  var s_toSearch = args.slice('lols').join(' ')
  var staticDataC = require('./staticData/champions.json')
  var URLtoSearch = 'https://euw1.api.riotgames.com/lol/summoner/v3/summoners/by-name/' + s_toSearch + '?api_key=' + api_key
  var URLforVersion = 'https://ddragon.leagueoflegends.com/realms/euw.json'
  var URLServeurStatus = 'https://euw1.api.riotgames.com/lol/status/v3/shard-data?api_key=' + api_key
  var URLChampions = 'https://gist.githubusercontent.com/nagash/1688617/raw/077bdbbeece2d20b254304c035bd05bbe780b9b2/lol-champions.json/'

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
                          if(objJson[0]==undefined){ // SI IL EST PAS RANKED

                            // ON RECUP LES INFOS DES CHAMPS
                              console.log('Recup des infos des champs')

                                // ON RECUPERE LES INFOS DU PREMIER CHAMP
                                data.premierChampList = staticDataC.data[data.premierChamp.championId]
                                data.premierChampName = data.premierChampList.name

                                // ON RECUPERE LES INFOS DU DEUXIEME CHAMP
                                data.deuxiemeChampList = staticDataC.data[data.deuxiemeChamp.championId]
                                data.deuxiemeChampName = data.deuxiemeChampList.name

                                // ON RECUPERE LES INFOS DU TROISIEME CHAMP
                                data.troisiemeChampList = staticDataC.data[data.troisiemeChamp.championId]
                                data.troisiemeChampName = data.troisiemeChampList.name

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
                                              value: '1er champion: \n**' + data.premierChampName + '** | ' + data.premierChamp.championPoints + ' points\n2ème champion: \n**' + data.deuxiemeChampName + '** | ' + data.deuxiemeChamp.championPoints + ' points\n3ème champion: \n**' + data.troisiemeChampName + '** | ' + data.troisiemeChamp.championPoints + ' points',
                                              inline: true
                                            },
                                            {
                                              name: 'Classement',
                                              value: 'Rang: [UNRANKED]()',
                                              inline: true
                                            }
                                          ],
                                          footer: {
                                            text: 'Patch 7.22'
                                          }
                                        }})

                          } else {
                            // LA ON RECUP LES INFOS DU RANK SOLO/DUO
                            data.tierSD = objJson[0].tier
                            data.soloRankNameSD = objJson[0].name
                            let indexRankingSD = objJson[0]
                            let soloRankDivisionSD = indexRankingSD.entries.find(post => post.playerOrTeamId === '' + data.id + '')
                            data.soloRankWinsSD = soloRankDivisionSD.wins
                            data.soloRankLossesSD = soloRankDivisionSD.losses
                            data.soloRankLPSD = soloRankDivisionSD.leaguePoints
                            data.soloRankDivSD = soloRankDivisionSD.rank

                            // LA ON RECUP LES INFOS DU RANK FLEX
                            data.tierF = objJson[1].tier
                            data.soloRankNameF = objJson[1].name
                            let indexRankingF = objJson[1]
                            let soloRankDivisionF = indexRankingF.entries.find(post => post.playerOrTeamId === '' + data.id + '')
                            data.soloRankWinsF = soloRankDivisionF.wins
                            data.soloRankLossesF = soloRankDivisionF.losses
                            data.soloRankLPF = soloRankDivisionF.leaguePoints
                            data.soloRankDivF = soloRankDivisionF.rank


                            var URLChampions1 = 'https://euw1.api.riotgames.com/lol/static-data/v3/champions/' + data.premierChamp.championId + '?locale=fr_FR&tags=image&api_key=' + api_key
                            var URLChampions2 = 'https://euw1.api.riotgames.com/lol/static-data/v3/champions/' + data.deuxiemeChamp.championId + '?locale=fr_FR&tags=image&api_key=' + api_key
                            var URLChampions3 = 'https://euw1.api.riotgames.com/lol/static-data/v3/champions/' + data.troisiemeChamp.championId + '?locale=fr_FR&tags=image&api_key=' + api_key

                            // ON RECUP LES INFOS DES CHAMPS
                              console.log('Recup des infos des champs')
                              // ON RECUPERE LES INFOS DU PREMIER CHAMP
                              data.premierChampList = staticDataC.data[data.premierChamp.championId]
                              data.premierChampName = data.premierChampList.name

                                // ON RECUPERE LES INFOS DU DEUXIEME CHAMP
                                data.deuxiemeChampList = staticDataC.data[data.deuxiemeChamp.championId]
                                data.deuxiemeChampName = data.deuxiemeChampList.name

                                    // ON RECUPERE LES INFOS DU TROISIEME CHAMP
                                    data.troisiemeChampList = staticDataC.data[data.troisiemeChamp.championId]
                                    data.troisiemeChampName = data.troisiemeChampList.name

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
                                              value: '1er champion: \n**' + data.premierChampName + '** | ' + data.premierChamp.championPoints + ' points\n2ème champion: \n**' + data.deuxiemeChampName + '** | ' + data.deuxiemeChamp.championPoints + ' points\n3ème champion: \n**' + data.troisiemeChampName + '** | ' + data.troisiemeChamp.championPoints + ' points',
                                              inline: true
                                            },
                                            {
                                              name: 'Classement Solo/Duo',
                                              value: 'Rang: **' + data.tierSD + '** **' + data.soloRankDivSD + '**\nSurnom du rang: **' + data.soloRankNameSD + '**\nLP: **' + data.soloRankLPSD + '**\nPartie\(s\) gagnée(s): **' + data.soloRankWinsSD + '**\nPartie\(s\) perdue\(s\): **' + data.soloRankLossesSD + '**',
                                              inline: true
                                            },
                                            {
                                              name: 'Classement Flex',
                                              value: 'Rang: **' + data.tierF + '** **' + data.soloRankDivF + '**\nSurnom du rang: **' + data.soloRankNameF + '**\nLP: **' + data.soloRankLPF + '**\nPartie\(s\) gagnée(s): **' + data.soloRankWinsF + '**\nPartie\(s\) perdue\(s\): **' + data.soloRankLossesF + '**',
                                              inline: true
                                            }
                                          ],
                                          footer: {
                                            text: 'Patch 7.22'
                                          }
                                        }})
                          }
                        } else {
                          message.channel.send({embed: {
                            color: 11797508,
                            description: 'Il y a eu trop de requete !'
                          }})
                          console.log(err)
                        }
                      }) // FIN DU SIZIEME REQUEST
                    } else {
                      message.channel.send({embed: {
                        color: 11797508,
                        description: 'Il y a eu trop de requete !'
                      }})
                      console.log(err)
                    }
                  }) // FIN DU CINQUIEME REQUEST

                } else {
                  message.channel.send({embed: {
                    color: 11797508,
                    description: 'Il y a eu trop de requete !'
                  }})
                  console.log(err)
                }
              }) // FIN DU QUATRIEME REQUEST

          } else {
            message.channel.send({embed: {
              color: 11797508,
              description: 'Il y a eu trop de requete !'
            }})
          console.log(err)
          }
          }) // FIN DU DEUXIEME REQUEST
          callback(null, data) // LE P'PTIT CALLBACK
        } else {
          message.channel.send({embed: {
            color: 11797508,
            description: 'Il y a eu trop de requete !'
          }})
          console.log(err)
        }
      }) // FIN DU PREMIER REQUEST
    } // FIN DE LA FONCTION CALLBACK
  ]
) // FIN DU ASYNC
} // FIN DU MODULE EXPORTS
