import React from 'react'

import RenderPropsWrapper from '../components/render-props/render-props-wrapper'


export default function RenderProps() {
  return (
    <>
      <RenderPropsWrapper render={() => <p>hello render props</p>} />
      <RenderPropsWrapper render={() => <h2>This is render props</h2>} />
    </>
  )
}
