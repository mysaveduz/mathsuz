import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {Container, Typography} from '@material-ui/core';

import  posts from '../../../../fakeData.js';

export default function Post(){
  const { id } = useParams();
  const post = posts.filter(post => post.id === id)[0];
   if(post){
     return(
       <Container maxWidth='lg'>
         <Typography variant='h3' gutterBottom>
           {post.name}
         </Typography>
         <Typography variant='body1' gutterBottom>
           by {post.author.name} {' ⋄ '} {post.author.school} {' ⋄ '} {post.date}
         </Typography>
         <Typography variant='body1'>
           {post.content}
         </Typography>
       </Container>
     );
   } else {
     return <Typography color='error'>Post not found!</Typography>
   }

}
