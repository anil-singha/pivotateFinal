import React, { Component } from 'react';

import { NoStackConsumer } from '@nostack/no-stack/dist/no-stack.cjs';
import CreateForm from '../../ProgressBar/CreateAppForm';

export class AppCreationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      appTitle: 'My App',
      description: '',
      userType: '',
      appName: '',
      screenName: '',
      subTypeInfo: '',
    };
  }

  render() {
    console.log('this.props', this.props);
    const { step } = this.state;
    const {
      appTitle,
      description,
      userType,
      appName,
      screenName,
      subTypeInfo,
    } = this.state;
    const values = {
      appTitle,
      description,
      userType,
      appName,
      screenName,
      subTypeInfo,
    };
    // 4 screens
    return <CreateForm />;
  }
}

export default AppCreationForm;
