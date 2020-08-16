/*
  This file has been partially generated!
  To permit updates to the generated portions of this code in the future,
  please follow all rules at https://bit.ly/nsFrontEndRules
 */

import React, { useState } from 'react'
import { graphql } from '@apollo/react-hoc'
import styled from 'styled-components'
import { EXECUTE } from '@nostack/no-stack'
import compose from '@shopify/react-compose'

// ns__custom_start unit: appSpec, comp: DescriptionCreationForm, loc: addedImports
import PropTypes from 'prop-types'
import { TextField, makeStyles } from '@material-ui/core'
import { CREATE_APP_FOR_APP_INFO_ACTION_ID } from '../../config'
import DescriptionCreationForm from '../../components/AppInfo/DescriptionCreationForm'
// ns__custom_end unit: appSpec, comp: DescriptionCreationForm, loc: addedImports

// ns__custom_start unit: appSpec, comp: DescriptionCreationForm, loc: styling
// change styling here
const Form = styled.div`
  margin: 2em;
  padding: 1.5em;
  border: none;
  border-radius: 5px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
`

const Button = styled.button`
  margin-left: 1em;
`

const Label = styled.label`
  width: 50%;
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

// ns__custom_end unit: appSpec, comp: DescriptionCreationForm, loc: styling
function AppCreationForm({ customerId, createApp, refetchQueries }) {
  const [appValue, updateAppValue] = useState('')
  const [loading, updateLoading] = useState(false)

  const styles = useStyles()

  function handleChange(e) {
    updateAppValue(e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (!appValue) {
      return
    }

    updateLoading(true)

    const createAppResponse = await createApp({
      variables: {
        actionId: CREATE_APP_FOR_APP_INFO_ACTION_ID,
        executionParameters: JSON.stringify({
          parentInstanceId: customerId,
          value: appValue,
        }),
        unrestricted: false,
      },
      refetchQueries,
    })

    updateAppValue('')
    updateLoading(false)
  }

  function handleKeyPress(e) {
    if (e.charCode === 13) {
      handleSubmit(e)
    }
  }

  return (
    <>
      <Form>
        <Label htmlFor='app-value'>
          <TextField
            className={styles.textField}
            id='app-value'
            type='text'
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            value={appValue}
            disabled={loading}
            variant='outlined'
            label='App'
          />
        </Label>
        <Button type='submit' disabled={loading} onClick={handleSubmit}>
          {loading ? 'Creating App...' : 'Create App'}
        </Button>
      </Form>
    </>
  )
}

export default compose(graphql(EXECUTE, { name: 'createApp' }))(AppCreationForm)

AppCreationForm.propTypes = {
  customerId: PropTypes.string,
  refetchQueries: PropTypes.array,
  createApp: PropTypes.func,
  // ns__custom_start unit: appSpec, comp: AppCreationForm, loc: addedPropTypes
  // ns__custom_end unit: appSpec, comp: AppCreationForm, loc: addedPropTypes
}
