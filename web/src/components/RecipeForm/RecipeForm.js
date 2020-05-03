import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
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
          name="description"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="description"
          defaultValue={props.recipe?.description}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="description" className={CSS.errorMessage} />

        <Label
          name="title"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="title"
          defaultValue={props.recipe?.title}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="title" className={CSS.errorMessage} />

        <Label
          name="ingredients"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="ingredients"
          defaultValue={props.recipe?.ingredients}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="ingredients" className={CSS.errorMessage} />

        <Label
          name="instructions"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="instructions"
          defaultValue={props.recipe?.instructions}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="instructions" className={CSS.errorMessage} />

        <Label
          name="yield"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="yield"
          defaultValue={props.recipe?.yield}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="yield" className={CSS.errorMessage} />

        <Label
          name="source"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="source"
          defaultValue={props.recipe?.source}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="source" className={CSS.errorMessage} />

        <Label
          name="author"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="author"
          defaultValue={props.recipe?.author}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="author" className={CSS.errorMessage} />

        <Label
          name="notes"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="notes"
          defaultValue={props.recipe?.notes}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="notes" className={CSS.errorMessage} />

        <Label
          name="image"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="image"
          defaultValue={props.recipe?.image}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="image" className={CSS.errorMessage} />

        <Label
          name="isFavorite"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="isFavorite"
          defaultValue={props.recipe?.isFavorite}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="isFavorite" className={CSS.errorMessage} />

        <Label
          name="cooksCount"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="cooksCount"
          defaultValue={props.recipe?.cooksCount}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="cooksCount" className={CSS.errorMessage} />

        <Label
          name="lastCookedAt"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="lastCookedAt"
          defaultValue={props.recipe?.lastCookedAt}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="lastCookedAt" className={CSS.errorMessage} />

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
