import {
  CheckboxField,
  FieldError,
  FileField,
  Form,
  FormError,
  Label,
  Submit,
  TextAreaField,
  TextField,
} from '@redwoodjs/web'

const CSS = {
  label: 'block mt-6 text-gray-700 font-semibold',
  labelError: 'block mt-6 font-semibold text-red-700',
  input:
    'block mt-2 w-full p-2 border border-gray-300 text-gray-700 rounded focus:outline-none focus:border-gray-500',
  inputError:
    'block mt-2 w-full p-2 border border-red-700 text-red-900 rounded focus:outline-none',
  errorMessage: 'block mt-1 font-semibold uppercase text-xs text-red-700',
}

const RecipeForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.recipe?.id)
  }

  return (
    <div className="box-border text-sm -mt-4">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="p-4 bg-red-100 text-red-700 border border-red-300 rounded mt-4 mb-4"
          titleClassName="mt-0 font-semibold"
          listClassName="mt-2 list-disc list-inside"
        />

        <Label
          name="title"
          className={CSS.label}
          errorClassName={CSS.labelError}
        >
          Title
        </Label>
        <TextField
          name="title"
          defaultValue={props.recipe?.title}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="title" className={CSS.errorMessage} />

        <Label
          name="description"
          className={CSS.label}
        >
          Description
        </Label>
        <TextAreaField
          name="description"
          defaultValue={props.recipe?.description}
          className={CSS.input}
        />

        <Label name="ingredients" className={CSS.label}>
          Ingredients
        </Label>
        <TextAreaField
          name="ingredients"
          defaultValue={props.recipe?.ingredients}
          className={CSS.input}
        />

        <Label name="instructions" className={CSS.label}>
          Instructions
        </Label>
        <TextAreaField
          name="instructions"
          defaultValue={props.recipe?.instructions}
          className={CSS.input}
        />

        <Label name="yield" className={CSS.label}>
          Yield
        </Label>
        <TextField
          name="yield"
          defaultValue={props.recipe?.yield}
          className={CSS.input}
        />

        <Label name="source" className={CSS.label}>
          Source
        </Label>
        <TextField
          name="source"
          defaultValue={props.recipe?.source}
          className={CSS.input}
        />

        <Label name="author" className={CSS.label}>
          Author
        </Label>
        <TextField
          name="author"
          defaultValue={props.recipe?.author}
          className={CSS.input}
        />

        <Label name="notes" className={CSS.label}>
          Notes
        </Label>
        <TextAreaField
          name="notes"
          defaultValue={props.recipe?.notes}
          className={CSS.input}
        />

        <Label
          name="image"
          className={CSS.label}
          errorClassName={CSS.labelError}
        >
          Image
        </Label>
        <FileField
          name="image"
          className={CSS.input}
          errorClassName={CSS.inputError}
        />
        <FieldError name="image" className={CSS.errorMessage} />

        <Label name="isFavorite" className={CSS.label}>
          Favorite
          <CheckboxField
            name="isFavorite"
            defaultValue={props.recipe?.isFavorite}
            className={CSS.input}
          />
        </Label>

        <div className="mt-8 text-center">
          <Submit
            disabled={props.loading}
            className="bg-blue-600 text-white hover:bg-blue-700 text-xs rounded px-4 py-2 uppercase font-semibold tracking-wide"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default RecipeForm
