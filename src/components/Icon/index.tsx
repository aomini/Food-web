import React, {FunctionComponent} from 'react'

import {icons} from "./icons"

/**
 * An Icon is a piece of visual element, but we must ensure its accessibility while using it.
 * It can have 2 purposes:
 *
 * - *decorative only*: for example, it illustrates a label next to it. We must ensure that it is ignored by screen readers, by setting `aria-hidden` attribute (ex: `<Icon icon="check" aria-hidden />`)
 * - *non-decorative*: it means that it delivers information. For example, an icon as only child in a button. The meaning can be obvious visually, but it must have a proper text alternative via `aria-label` for screen readers. (ex: `<Icon icon="print" aria-label="Print this document" />`)
 */
const Icon: FunctionComponent<Props & JSX.IntrinsicElements['svg']> = ({icon, ...props}) => {
  return (
    <svg viewBox="0 0 24 24" width="24px" height="24px" {...props}>
      {icons[icon]}
    </svg>
  )
}
export default Icon;

export type Props = {
  icon: keyof typeof icons
}
