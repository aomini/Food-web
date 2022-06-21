import * as React from 'react'

import IColor from '../IColor'
import ISizes from '../ISizes'
import IVariations from '../IVariations'

interface IComponentProps {
  size?: ISizes
  variant?: IVariations
  color?: IColor
  children?: React.ReactNode
}

export default IComponentProps
