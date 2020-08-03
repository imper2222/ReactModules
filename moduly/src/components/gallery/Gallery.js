import React from 'react'
import GalleryItem from './GalleryItem'
import GalleryModal from './GalleryModal'

class Gallery extends React.Component {

    state = {
        showModal: false,
        currentImage: null,
    }

    render() {
        const styleGrid = {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gridAutoRows: "1fr",
            gap: "1em"
        }

        const styleFigure = {
            display: "flex",
            flexDirection: "column",
            margin: 0,
            transition: "all 0.5s"
        }

        return (
            <div>
                <div style={styleGrid}>
                    {

                        this.props.images.map((image, i) =>
                            <GalleryItem key={i} image={image} handlerShowModal={this.showModal} />
                        )
                    }
                </div>
                {
                    this.state.showModal == true &&
                    <GalleryModal 
                     image={this.state.currentImage}
                     first={this.isCurrenImageFirst()}
                     last={this.isCurrenImageLast()}
                     handlerHideModal={this.hideModal} 
                     handlerNextImage={this.nextImage} 
                     handlerPreviousImage={this.previousImage} />
                }
            </div>
        )
    }

    isCurrenImageFirst = () => {
        const index = this.props.images.indexOf(this.state.currentImage);
        return index == 0;
    }

    isCurrenImageLast = () => {
        const index = this.props.images.indexOf(this.state.currentImage);
        return index == this.props.images.length - 1;
    }

    showModal = (image) => {
        console.log("Otwieranie okna modlanego...")
        console.log(image)
        this.setState({
            showModal: true,
            currentImage: image
        })
    }

    hideModal = () => {
        this.setState({
            showModal: false,
            currentImage: false
        })
    }

    nextImage = () => {
        let index = this.props.images.indexOf(this.state.currentImage);
        index++;
        if (index < this.props.images.length) {
            this.setState({
                currentImage: this.props.images[index]
            })
        }
    }

    previousImage = () => {
        let index = this.props.images.indexOf(this.state.currentImage);
        index--;
        if (index >= 0) {
            this.setState({
                currentImage: this.props.images[index]
            })
        }
    }
}

export default Gallery