import {React , useEffect , useState } from "react";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop : 150,
    marginLeft :50
  },
});

export default function Categories() {
  const classes = useStyles();
  const [categories , setcategories] = useState([])
  useEffect(()=>{
      axios.get('http://localhost:8000/categories').then((res)=>{
          setcategories(res.data)
      })
  },[])
  
  return (
      <div class="row">
      {categories.map((item)=>{
        return (
            <div class="col-lg-4">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {item.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Buy
                        </Button>
                        <Button size="small" color="primary">
                        See More
                        </Button>
                    </CardActions>
                </Card>
            </div>
            
        )
      })}
 </div>

    
  );
}

