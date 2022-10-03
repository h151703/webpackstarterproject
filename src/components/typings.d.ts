declare module '*.module.css' {
  const moduleclasses: { readonly [key: string]: string }
  export default moduleclasses
}

declare module '*.module.scss' {
  const scssclasses: { readonly [key: string]: string }
  export default scssclasses
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string }
  export default classes
}
