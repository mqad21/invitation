import React, { Fragment, useState } from 'react';
import { styWrapper } from './styles';
// import data from '@emoji-mart/data'

function SendWishesSection({ guestName }) {

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
    <div css={styWrapper}>
      <div id="fh5co-testimonial">
        <div className="overlay"></div>
        <div className="container min-vh-100">
          <div className="row justify-center">
            <div className="col-11 text-center fh5co-heading">
              <h2 className="main-font">Kirim Doa & Ucapan</h2>
              <p className="sub-title">
                Kesan mendalam akan terukir di hati kami, apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan ucapan selamat dan doa restu kepada kami. Atas kehadiran dan doa restu Bapak/Ibu/Saudara/i, kami ucapkan terima kasih.
              </p>
            </div>
          </div>
          <div className="row justify-center">
            <div className="col-10 glassmorphism py-4">
              <Fragment>
                <form>
                  <div className="row">
                    <div className="col">
                      <div class="form-group">
                        <label for="name">Nama</label>
                        <input
                          value={guestName}
                          onChange={handleSetName}
                          type="text"
                          class="form-control"
                          required
                        ></input>
                      </div>
                      <div class="form-group">
                        <label for="infoName">Keterangan</label>
                        <input
                          value={infoName}
                          onChange={handleSetInfoName}
                          type="text"
                          class="form-control"
                          placeholder="misal: Teman Kuliah Laila"
                          required
                        ></input>
                      </div>
                      <label for="wishes">Pesan</label>
                      <br></br>
                      <div class="form-group custom-emoji">
                        <textarea
                          value={wishes}
                          onChange={handleSetWishes}
                          rows="3"
                          cols="60"
                          class="form-control"
                          placeholder="Pesan dan doa restu untuk kedua mempelai"
                          required
                        ></textarea>
                      </div>
                      <br></br>
                      <button type="reset" class="btn btn-primary btn-block" onClick={() => handleWishesData()}>
                        Kirim
                      </button>
                    </div>
                  </div>
                </form>
              </Fragment>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendWishesSection;
