import React, { Fragment, useEffect, useState } from 'react';
import { styWrapper } from './styles';
import { useForm } from "react-hook-form";
import { sendWish } from '../../services/ApiService';

const id = typeof window != "undefined" ? localStorage.getItem('rZTrl3iOfg') : ''

function SendWishesSection({ guestName, goToPrevious }) {

  const [disabled, setDisabled] = useState(false);
  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm({
    defaultValues: {
      id,
      name: guestName,
    },
  });

  const onSubmit = async (data) => {
    const response = await sendWish(data)
    reset()
    goToPrevious()
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
                  Kesan mendalam akan terukir di hati kami, apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan ucapan selamat dan doa restu kepada kami. Atas kehadiran dan doa restu Bapak/Ibu/Saudara/i, kami ucapkan terima kasih.
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
                        <div class="form-group">
                          <label for="name">Nama</label>
                          <input
                            disabled={disabled}
                            {...register("name", { required: true })}
                            type="text"
                            class="form-control"
                          ></input>

                          {errors.name?.type === 'required' && <div class="text-danger">
                            Mohon diisi
                          </div>}
                        </div>
                        <label for="message">Pesan</label>
                        <div class="form-group">
                          <textarea
                            disabled={disabled}
                            {...register("message", { required: true, maxLength: 500 })}
                            rows="3"
                            cols="60"
                            class="form-control"
                            placeholder="Ucapan dan doa restu untuk kedua mempelai"
                          ></textarea>
                          {errors.message?.type === 'required' && <div class="text-danger">
                            Mohon diisi
                          </div>}
                        </div>
                        {/* Select konfirmasi kehadiran */}
                        <div class="form-group my-4">
                          <select
                            disabled={disabled}
                            {...register("is_attend", { required: true })}
                            class="form-control"
                          >
                            <option value="">Konfirmasi Kehadiran</option>
                            <option value="1">Hadir</option>
                            <option value="0">Tidak Hadir</option>
                          </select>
                          {errors.is_attend?.type === 'required' && <div class="text-danger">
                            Mohon diisi
                          </div>}
                        </div>
                        <button type="submit" class="btn btn-primary btn-block">
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
    </div>
  );
}

export default SendWishesSection;
