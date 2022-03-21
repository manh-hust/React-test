import { Formik, Form,  } from "formik";
import {Label, Input, FormGroup} from 'reactstrap'
import Banner from '../Banner'

function FormMik(props){


    return (
       <div>
        <Formik>
           {formikProps => {

            return (
            <Form>
                <FormGroup>
                    <Label for="titleId">Title</Label>
                    <Input name="title" id="titleId" placeholder="Eg: Wow nature ..."/>
                </FormGroup>
            </Form>
            )

            }}
       </Formik>
       <Banner/> 
       </div>
    )
}

export default FormMik