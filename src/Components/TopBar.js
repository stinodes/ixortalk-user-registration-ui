/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2016-present IxorTalk CVBA
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
// @flow
import * as React from 'react'
import styled from '@emotion/styled'
import { Fixed } from '../Components'
import config from '../config'

const Logo = styled('div')({
  height: 40,
  width: '100%',
  background: `url(${config.platformLogo}) left no-repeat`,
  backgroundSize: 'contain',
})
const TopBarContainer = styled(Fixed)(
  {
    display: 'flex',
    top: 0,
    right: 0,
    left: 0,
    height: 80,
    backgroundColor: 'white',
    borderBottom: '1px solid',
    alignItems: 'center',
    zIndex: 999,
  },
  ({ theme: { colors } }) => ({ borderBottomColor: colors.lights[2] }),
)

export const TopBar = () => (
  <TopBarContainer px={3}>
    <Logo />
  </TopBarContainer>
)
