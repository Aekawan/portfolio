export const MENU_LIST = [
  { id: "me", label: "Me" },
  { id: "project", label: "Project" },
  { id: "why", label: "Why me?" },
  { id: "blog", label: "Blog" },
]

export const MENU = MENU_LIST.reduce((menu, { id }) => {
  return { ...menu, [id.toUpperCase()]: id }
}, {})

export const CONTENT = {
  title: "Hello, I'm",
  name: "Aekkawan Klapsan",
  position: "Senior Software Developer",
  description:
    `My passion is to create the best and beautiful 
    web and mobile applications for everyone in 
    the world and write quality code. I’m always
    willing to learn new thing`,
}
