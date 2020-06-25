import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {Container, Typography} from '@material-ui/core';

import  examples from '../../../../fakeData.js';

export default function Example(){
  const { id } = useParams();
  const example = examples.filter(example => example.id === id)[0];

   if(example){
     return(
       <Container maxWidth='lg'>
         <Typography variant='h3' gutterBottom>
           {example.name}
         </Typography>
         <Typography variant='body1' gutterBottom>
           by {example.author.name} {' ⋄ '} {example.author.school} {' ⋄ '} {example.date}
         </Typography>
         <Typography>
           class: {example.class} sinf {' ⋄ '} manba {example.source}
         </Typography>
         <Typography variant='body1'>
           {example.content}
         </Typography>
       </Container>
     );
   } else {
     return <Typography color='error'>Example not found!</Typography>
   }

}
