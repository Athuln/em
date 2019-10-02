import React from 'react'
import { connect } from 'react-redux'
import * as classNames from 'classnames'

// constants
import {
  TUTORIAL_STEP_END,
} from '../constants.js'

// components
import { Breadcrumbs } from './Breadcrumbs.js'
import { HomeLink } from './HomeLink.js'
import { Status } from './Status.js'

/** A navigation bar that contains a link to home, breadcrumbs, and status. */
export const NavBar = connect(({ cursor, settings: { tutorialStep } = {} }) => ({ cursor, tutorialStep }))(({ cursor, position, tutorialStep }) =>
  <div className={classNames({
    nav: true,
    ['nav-' + position]: true
  })}>
    <div className={classNames({
      'nav-container': true,
      'nav-fill': cursor && cursor.length > 1
    })}>
      {tutorialStep === TUTORIAL_STEP_END ? <HomeLink /> : null}
      {tutorialStep === TUTORIAL_STEP_END ? <Breadcrumbs /> : null}
      <Status />
    </div>
  </div>
)

