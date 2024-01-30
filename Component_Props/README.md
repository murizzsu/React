# Component dibagi 2 yaitu
1. Class Component (sudah tidak digunakan)
> import React from "react"
class Button extends React.Component {
  render() {
    return (
      <button className="h-10 px-6 font-semibold rounded-md bg-slate-700 text-white" type="submit">
        Buy now
      </button>
    )
  }
}

2. Functional Component
> function ButtonBlack() {
  return (
    <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
      Buy now
    </button>
  )
}

- Aturan penukisan component menggunakan huruf besar di awal

- component children: komponen digunakan untuk menangkap apa yang ada dalam tag komponen tersebut (props.children)

- Tanpa nilai default
> const Button = (props) => {
  return(
    <button className={`h-10 px-6 font-semibold rounded-md ${props.variant} text-white`} type="submit">
      {props.children}
    </button>
  )
}

- menggunakan nilai default menggunakan konsep destructuring
> const Button = (props) => {
  const {children="...", variant="bg-black"} = props
  return(
    <button className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`} type="submit">
      {children}
    </button>
  )
}

