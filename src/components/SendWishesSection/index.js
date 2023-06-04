import React, { Fragment, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { sendWish } from '../../services/ApiService';
import { styWrapper } from './styles';

const id = typeof window != "undefined" ? localStorage.getItem('rZTrl3iOfg') : ''

function SendWishesSection({ guestName, goToPrevious, fetchWishes, hideGift }) {

  const [disabled, setDisabled] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting, isValidating }, setValue, reset } = useForm({
    defaultValues: {
      id,
      name: guestName,
    },
  });

  const onSubmit = async (data) => {
    try {
      await sendWish(data)
      reset()
      await fetchWishes(true)
      goToPrevious()
    } catch (e) {
      console.error(e)
    }
  }


  useEffect(() => {

  }, []);

  return (
    <div css={styWrapper}>
      <div id="fh5co-testimonial">
        <div className="overlay"></div>
        <div className="container d-flex min-vh-100">
          <div className="my-auto">
            <div className="row justify-center">
              <div className="col-11 text-center fh5co-heading">
                <h2 className="main-font">Kirim Doa & Ucapan</h2>
                <p className="sub-title">
                  Kesan mendalam akan terukir di hati kami, apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan ucapan selamat dan doa restu kepada {hideGift ? 'anak kami' : 'kami'}. Atas kehadiran dan doa restu Bapak/Ibu/Saudara/i, kami ucapkan terima kasih.
                </p>
              </div>
            </div>
            <div className="row justify-center">
              <div className="col-10 glassmorphism py-4 glassmorphism-single">
                <Fragment>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                      <div className="col">
                        <input type='hidden' {...register("id")} />
                        <div className="form-group">
                          <label for="name">Nama</label>
                          <input
                            disabled={disabled}
                            {...register("name", { required: true })}
                            type="text"
                            className="form-control"
                          ></input>

                          {errors.name?.type === 'required' && <div className="text-danger">
                            Mohon diisi
                          </div>}
                        </div>
                        <label for="message">Doa & Ucapan</label>
                        <div className="form-group">
                          <textarea
                            disabled={disabled}
                            {...register("message", { required: true, maxLength: 500 })}
                            rows="3"
                            cols="60"
                            className="form-control"
                            placeholder="Ucapan dan doa restu untuk kedua mempelai"
                          ></textarea>
                          {errors.message?.type === 'required' && <div className="text-danger">
                            Mohon diisi
                          </div>}
                          {errors.message?.type === 'maxLength' && <div className="text-danger">
                            Panjang karakter maksimal 500
                          </div>}
                        </div>
                        {/* Select konfirmasi kehadiran */}
                        <div className="form-group my-4">
                        <label for="is_attend">Konfirmasi Kehadiran</label>
                          <select
                            disabled={disabled}
                            {...register("is_attend", { required: true })}
                            className="form-control"
                          >
                            <option value=""></option>
                            <option value="1">Berkenan Hadir</option>
                            <option value="0">Maaf, Belum Bisa Hadir</option>
                          </select>
                          {errors.is_attend?.type === 'required' && <div className="text-danger">
                            Mohon diisi
                          </div>}
                        </div>
                        <button disabled={isValidating || isSubmitting} type="submit" className="btn btn-primary btn-block">
                          {isValidating || isSubmitting ? 'Mengirim...' : 'Kirim'}
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
    </div>
  );
}

export default SendWishesSection;
