import React, { Fragment, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { sendWish } from '../../services/ApiService';
import { styWrapper } from './styles';

function RsvpSection({hideGift}) {

  const [hasFilled, setHasFilled] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting, isValidating }, reset } = useForm({
    defaultValues: {
      id: Math.random().toString(36).substr(2, 9),
    },
  });

  useEffect(() => {
    if (typeof window === "undefined") return
    const hasFilled = localStorage.getItem('rZTrl3iYfc')
    if (hasFilled) {
      setHasFilled(true)
    }
  }, []);

  const onSubmit = async (data) => {
    try {
      await sendWish(data)
      reset()
      localStorage.setItem('rZTrl3iYfc', true)
      setHasFilled(true)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div css={styWrapper}>
      <div id="fh5co-rsvp">
        <div className="overlay"></div>
        <div className="container d-flex min-vh-100">
          <div className="my-auto">
            <div className="row justify-center">
              <div className="col-11 text-center fh5co-heading">
                <h2 className="main-font">Konfirmasi Kehadiran</h2>
                <p className="sub-title">
                  Kesan mendalam akan terukir di hati kami, apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan ucapan selamat dan doa restu kepada {hideGift ? 'anak kami' : 'kami'}. Atas kehadiran dan doa restu Bapak/Ibu/Saudara/i, kami ucapkan terima kasih.
                </p>
              </div>
            </div>
            <div className="row justify-center">
              <div className="col-10 glassmorphism py-4 glassmorphism-single">
                {!hasFilled && <Fragment>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                      <div className="col">
                        <input type='hidden' {...register("id")} />
                        <div className="form-group">
                          <label for="name">Nama</label>
                          <input
                            {...register("name", { required: true })}
                            type="text"
                            className="form-control"
                          ></input>

                          {errors.name?.type === 'required' && <div className="text-danger">
                            Mohon diisi
                          </div>}
                        </div>
                        {/* Select konfirmasi kehadiran */}
                        <div className="form-group my-4">
                          <label for="is_attend">Konfirmasi Kehadiran</label>
                          <select
                            {...register("is_attend", { required: true })}
                            className="form-control"
                          >
                            <option value=""></option>
                            <option value="1">Hadir</option>
                            <option value="0">Tidak Hadir</option>
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
                </Fragment>}
                {hasFilled &&
                  <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="56px" height="56px"><path fill="#1b9de2" d="M44.002,23.999c0-0.575-0.243-1.128-0.667-1.517l-1.41-1.359l0.933-1.653 c0.282-0.501,0.343-1.103,0.165-1.65c-0.178-0.548-0.58-0.999-1.104-1.238l-1.76-0.857l0.376-1.86 c0.113-0.563-0.015-1.153-0.353-1.619c-0.338-0.466-0.859-0.771-1.433-0.837l-1.939-0.272L36.593,9.25 c-0.065-0.571-0.37-1.093-0.835-1.431c-0.465-0.338-1.056-0.466-1.621-0.354l-1.929,0.341l-0.789-1.726 c-0.239-0.522-0.69-0.924-1.236-1.102c-0.548-0.18-1.148-0.118-1.651,0.164l-1.728,0.92l-1.285-1.397C25.13,4.242,24.577,4,24.003,4 H24c-0.576,0.001-1.131,0.246-1.519,0.67l-1.359,1.41l-1.653-0.932c-0.501-0.283-1.104-0.341-1.649-0.165 c-0.547,0.177-0.999,0.58-1.238,1.103l-0.857,1.76l-1.86-0.375c-0.564-0.116-1.154,0.014-1.618,0.352 c-0.466,0.338-0.771,0.859-0.838,1.433l-0.271,1.94L9.25,11.412c-0.571,0.066-1.093,0.37-1.432,0.836 c-0.338,0.465-0.467,1.056-0.354,1.621l0.342,1.928l-1.725,0.789c-0.523,0.239-0.926,0.689-1.104,1.236 C4.8,18.369,4.86,18.971,5.143,19.473l0.92,1.728l-1.396,1.284c-0.425,0.389-0.668,0.942-0.668,1.518 c0,0.576,0.243,1.129,0.667,1.519l1.41,1.359l-0.933,1.653c-0.282,0.501-0.343,1.103-0.165,1.65s0.58,0.999,1.104,1.237l1.76,0.857 L7.465,34.14c-0.113,0.563,0.015,1.153,0.353,1.619c0.338,0.466,0.859,0.771,1.435,0.838l1.939,0.267l0.218,1.884 c0.064,0.571,0.368,1.093,0.833,1.431c0.468,0.339,1.058,0.469,1.623,0.354l1.929-0.342l0.789,1.727 c0.239,0.522,0.69,0.924,1.237,1.102s1.148,0.117,1.649-0.165l1.729-0.92l1.284,1.398C22.872,43.757,23.426,44,24.001,44h0.001 c0.575,0,1.128-0.244,1.517-0.667l1.359-1.41l1.653,0.932c0.502,0.284,1.104,0.343,1.649,0.165c0.547-0.177,0.999-0.58,1.238-1.104 l0.857-1.76l1.861,0.376c0.559,0.113,1.152-0.015,1.618-0.353c0.465-0.338,0.771-0.859,0.837-1.432l0.271-1.94l1.886-0.217 c0.571-0.066,1.093-0.37,1.432-0.836s0.467-1.056,0.354-1.621l-0.342-1.929l1.725-0.789c0.523-0.239,0.926-0.689,1.104-1.236 c0.179-0.547,0.118-1.148-0.164-1.651l-0.92-1.729l1.397-1.284C43.759,25.128,44.002,24.574,44.002,23.999z" /><path d="M22.638,33.099c-0.791,0-1.499-0.421-1.894-1.126c-3.561-6.374-9.234-9.344-9.291-9.374l-0.35-0.18 l0.411-1.711h0.394c5.406,0,8.381,1.919,10.518,3.931c3.342-5.339,10.411-8.612,13.42-9.38l0.407-0.104l0.751,1.664l-0.348,0.236 c-6.371,4.331-9.926,10.52-12.045,14.799C24.229,32.622,23.474,33.099,22.638,33.099z" opacity=".05" /><path d="M22.638,32.599c-0.608,0-1.152-0.325-1.457-0.87c-3.652-6.539-9.441-9.545-9.5-9.575l0.228-0.945 c5.94,0,8.774,2.386,10.624,4.23c3.094-5.51,10.307-8.896,13.438-9.695l0.405,0.898c-6.469,4.397-10.067,10.661-12.212,14.99 C23.867,32.228,23.283,32.599,22.638,32.599z" opacity=".07" /><path fill="#fff" d="M11.908,21.709c0,0,5.94,3.029,9.709,9.776c0.478,0.855,1.663,0.805,2.098-0.075 c2.052-4.143,5.66-10.614,12.379-15.181c-3.583,0.914-10.749,4.568-13.437,10.048C20.865,24.449,18.178,21.709,11.908,21.709z" /></svg>
                    <h3 className="main-font confirmation-message">Terima kasih<br /><small>atas konfirmasi kehadiran Anda</small></h3>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RsvpSection;
