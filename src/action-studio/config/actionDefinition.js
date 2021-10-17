export const FETCH_BLOCK_CONFIG = {
  type: 'fetch',
  convertToJSON: (ref) => {
    return {
      model: ref.getFieldValue('MODEL'),
      path: ref.getFieldValue('PATH'),
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
        'name': 'SUCCESS'
      },
      {
        'type': 'field_label_serializable',
        'name': 'FAILED',
        'text': 'failed'
      },
      {
        'type': 'input_statement',
        'name': 'FAILED'
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
      model: ref.getFieldValue('MODEL'),
      path: ref.getFieldValue('PATH'),
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
  convertToJSON: (ref) => {},
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
  convertToJSON: (ref) => {},
  config: {
    "type": "set_form_error",
    "message0": "Set Form Errors",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 300,
    "tooltip": "",
    "helpUrl": ""
  }
}

