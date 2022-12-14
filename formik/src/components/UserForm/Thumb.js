import React, { Component } from 'react'

class Thumb extends Component {
  state = {
    loading: false,
    thumb: undefined,

  };
  componentWillReceiveProps(nextProps){
    if(!nextProps.file){
      return;
    }
    this.setState({loading:false},() => {
      let reader =new FileReader();

      reader.onload =() => {
        this.setState({loading : false, thumb: reader.result });

      };

 reader.readAsDataURL(nextProps.file);
    });

    }
  
  render() {
    const { file } = this.props;
    const {loading, thumb} = this.state;

    if(!file){
       return null;
    }

    if(loading){
      return<p>loading...</p>;
    }


    return (
      <div>
        <img
        src={thumb}
        alt={file.name}
        className="img-thumbnail mt-2"
        height={200}
        width={200}
        />
      </div>
    );
  }
}

export default Thumb;

