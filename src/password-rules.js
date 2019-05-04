const criteriasTemplate = {
    'nstart-end-space': {
        'warningMsg': 'Password cannot start or end with a space.',
        'regex': new RegExp('^[^\\s]*[^\\s]$')
    },
    'include-lower': {
        'warningMsg': 'Please include a lower case letter.',
        'regex': new RegExp('[a-z]')
    },
    'include-upper': {
        'warningMsg': 'Please include a upper case letter.',
        'regex': new RegExp('[A-Z]')
    },
    'include-number': {
        'warningMsg': 'Please include a number.',
        'regex': new RegExp('[0-9]')
    },
    'length-limit': {
        'warningMsg': 'Password length must inside 9-50.',
        'regex': new RegExp('^.{9,50}$')
    },
};
export default criteriasTemplate;