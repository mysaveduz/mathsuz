import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Typography, CardContent, Container, CardHeader, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({
  posts: {
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  card: {
    width: '260px',
    margin: theme.spacing(1),
  },
}));



function Blog() {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://my-blog-uz.firebaseio.com/blog-posts.json`);

      const responseObj = result.data;
      const posts = Object.keys(responseObj).map(id => {
        return { id: id,  fullText: responseObj[id].post, config: responseObj[id].config }
      });

      setPosts(posts);
      };

    fetchData();
  }, []);

  return(

    <section className={classes.posts}>
      {posts.map(post => (
        <Card  className={classes.card} elevation={3} key={post.id}>
        <CardHeader
            avatar={
              <Avatar aria-label="recipe" style={{backgroundColor: 'rgba(16, 72, 217, 0.83)'}}>
                R
              </Avatar>
            }
            title={post.fullText.title}
            subheader={post.config.date}
          />
          <CardContent>
            <Typography variant='body2' color='textSecondary' gutterBottom style={{marginTop: 'auto'}}>
              Author: {post.fullText.author}
            </Typography>
            <Typography variant='body1'>
            {post.fullText.content}
            </Typography>


          </CardContent>
        </Card>
      ))}
    </section>

  );
}

export default Blog;
