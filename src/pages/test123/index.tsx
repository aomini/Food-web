import * as React from 'react'

interface ITest123Prop {
  children: React.ReactNode
}

const Test123: React.FC<ITest123Prop> = () => {
  return <div> Hello Test123 component </div>
}

interface ITest123ServerProp {}

async function getServerSideProps(context: ITest123ServerProp) {
  return { props: {} }
}

export default Test123
