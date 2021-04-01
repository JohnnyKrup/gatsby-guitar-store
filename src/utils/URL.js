// export default "http://localhost:1337"
//export default "https://strapi-guitar-store.herokuapp.com"

export default process.env.GATSBY_API_URL

export const maintenance = [
  { name: "Beratung & Garantie", url: "consultation" },
  { name: "Miete", url: "rental" },
  { name: "Reparaturen", url: "workshop" },
]

export const store = [
  { name: "Team", url: "team" },
  { name: "Über uns", url: "about" },
  { name: "Kontakt", url: "contact" },
  { name: "Öffnungszeiten", url: "contact" },
]
