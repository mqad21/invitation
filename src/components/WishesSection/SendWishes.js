import React, { useState, Fragment } from 'react';
import { Link } from 'gatsby';
// import data from '@emoji-mart/data'

function SendWishes({}) {
    const [name, setName] = useState();
    // const [image, setImage] = useState();
    const [imageFilename, setImageFilename] = useState();
    const [infoName, setInfoName] = useState();
    const [wishes, SetWishes] = useState();

    const handleSetName = (e) => {
        setName(e.target.value);
    };

    const handleSetImage = async (e) => {
        // setImageFilename(e.target.value);
        // //dua2nya bisa dipakai
        // //    var file = document.querySelector('input[type="file"]').files[0];
        // var file = e.target.files[0];
        // const options = {
        //     maxSizeMB: 1,
        //     maxWidthOrHeight: 1920,
        //     useWebWorker: true
        // }
        // const compressedFile = await imageCompression(file, options);
        // var reader = new FileReader();
        // reader.readAsDataURL(compressedFile);
        // reader.onload = function () {
        //     setImage(reader.result)
        // };
        // var showImage = document.getElementById('showImage');
        // if (file) {
        //     showImage.src = URL.createObjectURL(file)
        // };
    };

    const handleSetInfoName = (e) => {
        setInfoName(e.target.value);
    };

    const handleSetWishes = (e) => {
        SetWishes(e.target.value);
    };

    const handleAddEmoji = (e) => {
        if (wishes) {
            SetWishes(wishes + e.native);
        } else {
            SetWishes(e.native);
        }
    };

    const handleWishesData = async () => {
        if (!name || !infoName || !wishes) {
            alert('silahkan lengkapi data !');
        } else {
            // const params = {
            //     'name': name,
            //     'description': infoName,
            //     'wishes': wishes,
            //     'image': image,
            //     'image_filename': imageFilename,
            //     'invitation_code': urlCode,
            //     'invitation_name': urlName,
            // }
            // let url = 'https://project.miftahussalam.com/wishes?' + (new URLSearchParams(params)).toString();
            try {
                // await fetch(url, { mode: 'no-cors' }, {
                //     method: 'GET'
                // });
                alert('berhasil dikirim');
            } catch (err) {
                alert(`gagal dikirim, silahkan hubungi administrator. ${err}`);
            }
            // window.location.assign(`/send-wishes?code=${urlCode}&name=${urlName}&type=${urlType}`);
        }
    };

    return (
        <div>
            <h2 className="title">Say Something For Us</h2>
            <h3 className="title__sub">Arin & Miftah Wedding</h3>

    
        </div>
    );
}

export default SendWishes;