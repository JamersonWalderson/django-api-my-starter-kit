import { FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react"

const InputField = ({ name, label, ...props }) => {
    return (
      <FormControl isInvalid={props.formik.errors[name] && props.formik.touched[name]}>
        <FormLabel htmlFor={name}>{label}</FormLabel>
        <Input
          id={name}
          name={name}
          onChange={props.formik.handleChange}
          onBlur={props.formik.handleBlur}
          value={props.formik.values[name]}
          {...props}
        />
        {props.formik.errors[name] && props.formik.touched[name] ? (
          <FormHelperText id={`${name}-error`}>{props.formik.errors[name]}</FormHelperText>
        ) : null}
      </FormControl>
    )
  }

  export default InputField;