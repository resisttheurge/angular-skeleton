export const seasons = {
  name: 'seasons',
  url: '/seasons',
  component: 'seasons'
}

export const seasonView = {
  name: 'seasons.seasonView',
  url: '/seasons/:id',
  params: {
    season: seasons
  },
  component: 'seasonView'
}