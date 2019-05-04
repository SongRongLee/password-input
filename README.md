# Password Input
## `pass-input.js` usage:
* Input config props:
    * `disabled`: The rules you want to disable for this password input. **Default: [ ]**
    * `length-min`: The minium length of the password. **Default: 9**
    * `length-max`: The maximum length of the password. **Default: 50**

* Example
```
let passInputConf = {
    'disabled': ['nstart-end-space', 'include-lower',
    'length-min': 3,
    'length-max': 10
};
```  

```
<PassInput config={passInputConf} />
```

* Rules you can disable:

Rules | Description
--- | ---
nstart-end-space | Must not start or end with a space.
include-lower | Must include a lower case letter.
include-upper | Must include a upper case letter.
include-number | Must include a number.

## `with-pass-check.js` usage:
* `withPassCheck(WrappedComponent)` is a HOC and sends the following props to its wrapped component:
    * `onChange`: Called when the text changes in child component.
    * `text`: The current text that the child component should show.
    * `msg`: The warning message if password is invalid.
    * `{...this.props}`
* It has same configuration as `PassInput`
* Example:
```
let CustomTextareaWithPassCheck = withPassCheck(CustomTextArea);
let testCustomTextarea = (
    <CustomTextareaWithPassCheck config={passInputConf} />
);
```