import React, { Component, createRef } from 'react';
import { Unit, withNoStack } from '@nostack/no-stack';
import { v4 } from 'uuid';

import { flattenData } from '../../flattenData';

import App from '../AppSpec/App';

import { SOURCE_APP_SPEC_ID } from '../../config';
import {
  APP_SPEC_RELATIONSHIPS,
  SOURCE_APP_SPEC_QUERY,
} from '../source-props/appSpec';

class Apps extends Component {
  state = {
    selectedAppId: null,
  };

  wrapperRef = createRef();

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick);
  }

  handleClick = (e) => {
    const node = this.wrapperRef.current;

    if (node && node !== e.target && !node.contains(e.target)) {
      this.setState({ selectedAppId: null });
    }
  };

  handleSelect = (id) => this.setState({ selectedAppId: id });

  render() {
    const customerId = '2ea51c4a-c072-4797-9de7-4bec0fc11db3';
    const { selectedAppId } = this.state;

    const parameters = {
      currentCustomer: customerId,
    };

    return (
      <Unit
        id={SOURCE_APP_SPEC_ID}
        typeRelationships={APP_SPEC_RELATIONSHIPS}
        query={SOURCE_APP_SPEC_QUERY}
        parameters={parameters}
      >
        {({ loading, error, data, refetchQueries }) => {
          if (loading) return 'Loading...';

          if (error) {
            return `Error: ${error.graphQLErrors}`;
          }

          const apps = data.unitData.map((el) => flattenData(el));

          return (
            <>
              <div className='box'>
                <div className='flex flex-column'>
                  {apps &&
                    apps.map((app) => (
                      <App
                        key={v4()}
                        parentId={customerId}
                        app={app}
                        selected={app.id === selectedAppId}
                        refetchQueries={refetchQueries}
                        onSelect={this.handleSelect}
                      />
                    ))}
                </div>
              </div>
            </>
          );
        }}
      </Unit>
    );
  }
}

export default withNoStack(Apps);
