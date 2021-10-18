export const FETCH_BLOCK_CONFIG = {
  type: 'fetch',
  convertToJSON: (ref) => {
    let contentsBlock = ref.getInputTargetBlock('SUCCESS_INPUT')

    console.log('contentsBlock', ref)
    return {
      onSuccess: ref.getFieldValue('SUCCESS_INPUT'),
      onFailure: ref.getFieldValue('FAILED_INPUT'),
    }
  },
  config: {
    'message0': 'Create Pet %1 data %2 %3 %4 %5 %6',
    'args0': [
      {
        'type': 'input_dummy'
      },
      {
        'type': 'input_value',
        'name': 'NAME'
      },
      {
        'type': 'field_label_serializable',
        'name': 'SUCCESS',
        'text': 'success'
      },
      {
        'type': 'input_statement',
        'name': 'SUCCESS_INPUT'
      },
      {
        'type': 'field_label_serializable',
        'name': 'FAILED',
        'text': 'failed'
      },
      {
        'type': 'input_statement',
        'name': 'FAILED_INPUT'
      }
    ],
    'inputsInline': true,
    'previousStatement': null,
    'nextStatement': null,
    'colour': 330,
    'tooltip': '',
    'helpUrl': ''
  }
}

export const FORM_DATA = {
  type: 'form_data',
  convertToJSON: (ref) => {
    return {
      values: true
    }
  },
  config: {
    'type': 'form_data',
    'message0': 'Form Data',
    'output': null,
    'colour': 300,
    'tooltip': '',
    'helpUrl': ''
  }
}

export const SPINNER_CONTROL = {
  type: 'spinner_control',
  convertToJSON: (ref) => {
    return {
      values: true
    }
  },
  config: {
    'type': 'spinner',
    'message0': '%1 %2',
    'args0': [
      {
        'type': 'field_label_serializable',
        'name': 'NAME',
        'text': 'Control Spinner'
      },
      {
        'type': 'field_dropdown',
        'name': 'SPINNER_STATE',
        'options': [
          [
            'true',
            'ON'
          ],
          [
            'false',
            'OFF'
          ]
        ]
      }
    ],
    'previousStatement': null,
    'nextStatement': null,
    'colour': 60,
    'tooltip': '',
    'helpUrl': ''
  }
}

export const SET_FORM_ERRORS = {
  type: 'set_form_error',
  convertToJSON: (ref) => {
    return {
      values: true
    }
  },
  config: {
    'type': 'set_form_error',
    'message0': 'Set Form Errors',
    'previousStatement': null,
    'nextStatement': null,
    'colour': 300,
    'tooltip': '',
    'helpUrl': ''
  }
}

export const SHOW_SUCCESS_MESSAGE = {
  type: 'show_success_message',
  convertToJSON: (ref) => {
    return {
      values: true
    }
  },
  config: {
    'type': 'show_success_message',
    'message0': 'Show Success Message',
    'previousStatement': null,
    'nextStatement': null,
    'colour': 90,
    'tooltip': '',
    'helpUrl': ''
  }
}

export const REDIRECT = {
  type: 'redirect',
  convertToJSON: (ref) => {
    return {
      values: true
    }
  },
  config: {
    'type': 'redirect',
    'message0': 'Redirect to %1',
    'args0': [
      {
        'type': 'field_input',
        'name': 'URL',
        'text': '/url'
      }
    ],
    'previousStatement': null,
    'nextStatement': null,
    'colour': 105,
    'tooltip': '',
    'helpUrl': ''
  }
}

