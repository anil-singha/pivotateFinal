/*
  This file has been partially generated!
  To permit updates to the generated portions of this code in the future,
  please follow all rules at https://bit.ly/nsFrontEndRules
 */
// ns__file unit: general, comp: LoginForm

// ns__custom_start unit: general, comp: LoginForm, loc: beforeImports

// ns__custom_end unit: general, comp: LoginForm, loc: beforeImports

import React, { useState } from 'react'
import styled from 'styled-components'

import { withNoStack } from '@nostack/no-stack'

import { TextField, makeStyles, Button, InputLabel } from '@material-ui/core'
import ForgotPasswordButton from '../ForgotPasswordButton'

// ns__custom_start unit: general, comp: LoginForm, loc: addedImport

import TransitionsModal from '../../custom/Modal'

// ns__custom_end unit: general, comp: LoginForm, loc: addedImport

// ns__custom_start unit: general, comp: LoginForm, loc: styling
const Wrapper = styled.div(
  ({ open }) => `
  width: 100%;

  padding: 1em 0;

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px 10px 10px 10px;
  box-shadow: 10px 10px 8px -1px rgba(0, 0, 0, 0.6);
  
`
)

const Row = styled.div`
  text-align: center;
  margin-bottom: 0.5rem;
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`

const useStyles = makeStyles((theme) => ({
  textField: {
    fontSize: '.8rem',
    textAlign: 'initial',
    width: '100%',
    margin: '6px 0',

    padding: 0,
    [`& fieldset`]: {
      borderRadius: '32px',
    },
  },
  button: {
    width: '80%',
    height: '3.5rem',
    borderRadius: '2rem',
  },
  inputLabel: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '1rem',
    color: 'black',
  },
}))
// ns__custom_end unit: general, comp: LoginForm, loc: beforeReturn

const LoginForm = ({
  loading,
  currentUser,
  login,
  // ns__custom_start unit: general, comp: LoginForm, loc: addedProps}
  open,
  onClose,
}) => {
  // ns__custom_end unit: general, comp: LoginForm, loc: addedProps
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  // ns__custom_start unit: general, comp: LoginForm, loc: beforeReturn
  const styles = useStyles()
  // ns__custom_end unit: general, comp: LoginForm, loc: beforeReturn

  if (loading || currentUser) {
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setIsSubmitting(true)

    try {
      await login({
        username,
        password,
      })
    } catch (error) {
      setError(
        error.message ||
          (error.graphQLErrors &&
            error.graphQLErrors.length &&
            error.graphQLErrors[0]) ||
          error
      )
      setIsSubmitting(false)
    }
  }

  return (
    // ns__custom_start unit: general, comp: LoginForm, loc: insideReturn
    <TransitionsModal open={open} onClose={onClose}>
      <div>
        <LogoContainer>
          <a href='/'>
            <img
              src='https://pivotatestaticassets.com/images/Pivotate Logo.svg'
              alt='Pivotate Logo'
              width='170'
            />
          </a>
        </LogoContainer>
        <InputLabel className={styles.inputLabel}>Login</InputLabel>
      </div>
      <form onSubmit={handleSubmit}>
        <Row>
          <label htmlFor='nostack-username'>
            <TextField
              className={styles.textField}
              id='nostack-username'
              type='text'
              name='username'
              label='Username'
              disabled={isSubmitting}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              variant='outlined'
            />
          </label>
        </Row>
        <Row>
          <label htmlFor='nostack-password'>
            <TextField
              className={styles.textField}
              id='nostack-password'
              label='Password'
              type='password'
              name='password'
              disabled={isSubmitting}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant='outlined'
            />
          </label>
        </Row>
        <Row>
          <Button
            className={styles.button}
            type='submit'
            disabled={isSubmitting || !username || !password}
            variant='contained'
            color='primary'
          >
            Log In{' '}
          </Button>
        </Row>
        {error && <Row>{error}</Row>}
      </form>
      <Row>
        <ForgotPasswordButton />
      </Row>
    </TransitionsModal>
    // ns__custom_end unit: general, comp: LoginForm, loc: insideReturn
  )
}

export default withNoStack(LoginForm)
