//this lander is from nodes/Lander.tsx

import React from 'react';
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';
import type { RootState } from '../../../store';
import { useSelector, useDispatch } from 'react-redux';
import { createStyles, Button } from '@mantine/core';
import { toggleLanderParentDrawer } from '../../../slices/drawerLanderParentSlice';
import nodeBFS from '../../lib/nodeBFS';
import { saveTree } from '../../../slices/tree';

const useStyles = createStyles((theme, _params, getRef) => ({
  formikFields: {
    width: '100%',
  },

  formikField: {
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    width: '100%',
    height: '50px',
    border: 0    
  },

  fontAwesomeSubmitButton: {
    width: '100%',
    marginTop: '10px',
    textAlign: 'center',
    padding: '5px',
    background: '#228be6',
    height: '50px',
  },
}));

interface MyFormValues {
  landerName: string;
  landerURL: string;
  landerWeight: number;
}

const LanderParent: React.FC<{}> = () => {
  const dispatch = useDispatch();
  //accessing the redux store node
  const node = useSelector((state: RootState) => state.node);

  //accessing the redux store tree
  /*
     *** Why structuredClone is used
     Was not able to modify or mutate the tree hence tree is cloned
     https://stackoverflow.com/questions/74388436/array-push-typeerror-cannot-add-property-0-object-is-not-extensible/74406136#74406136
  */
  const tree = structuredClone(
    useSelector((state: RootState) => state.tree.Tree)
  );

  const initialValues: MyFormValues = {
    landerName: '',
    landerURL: '',
    landerWeight: 0,
  };

  const { classes } = useStyles();

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          /* 
             *** TODOS
             Get the name of the current node clicked from the node redux store
             Get the current state of the tree from the tree store
             Get the name from the form
             Get the URL from the form
             Get the weight from the form
             Pass all the above values to nodeBFS. nodeBFS attaches the form details and returns a new tree
             Save the new tree in the redux tree store
          */
          actions.setSubmitting(false);
          dispatch(toggleLanderParentDrawer());
          /* 
             *** What is nodeBFS
             nodeBFPS is a function which constructs the tree. 
             To nodeBFS you pass name of the exisiting node, then the existing tree and the value of the child which is filled in the form

          */
          const newTree = nodeBFS({
            //this is the name of the node that you have clicked
            name: node!.Node.data.name,
            tree: tree,
            //this is the name of the new node entered in the form
            newNodeName: values.landerName,
            attributes: {
              type: 'landerParent',
              url: values.landerURL,
              weight: values.landerWeight,
            },
          });

          /*
            Once the tree is contructed, then the below function calls the redux dispatch
            To dispatch you pass the newly contructed tree from nodeBFS and it saves in the redux store
          */

          if (newTree) {
            dispatch(saveTree({ Tree: newTree }));
          }
        }}
      >
        <Form>
          <div className={classes.formikFields}>
            <Field
              className={classes.formikField}
              id="landerName"
              name="landerName"
              placeholder='Enter Name'
            />
            <Field
              className={classes.formikField}
              id="landerURL"
              name="landerURL"
              placeholder='Enter URL'
            />
            <Field
              className={classes.formikField}
              id="landerWeight"
              name="landerWeight"
              placeholder='0'
            />
          </div>
          <Button className={classes.fontAwesomeSubmitButton} type="submit">
            Save
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default LanderParent;
