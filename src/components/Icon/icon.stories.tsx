import React from 'react'

import Icon from '.'
import {icons} from "./icons"

export default {
  title: 'Icon',
  component: Icon
}

export const Basic = () => <Icon icon="check" />


export const  Labels = () => (
  <>
    <h2 className='text-base m-4'>
      {Object.keys(icons).length} icons
    </h2>
    <ul className="flex flex-wrap list-none p-0 m-0">
      {Object.keys(icons).map((key) => (
        <li key={key} className='inline-flex items-center m-4' style={{flex: '0 0 16%'}}>
          <Icon icon={key as keyof typeof icons} className="mr-2" aria-hidden />
          <div className='text-grey-300 text-xs'>{key}</div>
        </li>
      ))}
    </ul>
  </>
)

export const NoLabels = () => (
  <>
    <h2 className='text-base m-4'>
      {Object.keys(icons).length} icons
    </h2>
    <ul className="flex flex-wrap list-none p-0 m-0">
      {Object.keys(icons).map((key) => (
        <li key={key} className='p-0 m-4'>
          <Icon icon={key as keyof typeof icons} className="block" aria-label={key} />
        </li>
      ))}
    </ul>
  </>
)