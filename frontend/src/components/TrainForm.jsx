import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { updateForm } from "../store/formSlice";
import "./TrainForm.css";

const TrainForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.trainForm);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
  });

  // Załaduj dane z Redux do formularza
  useEffect(() => {
    Object.keys(formData).forEach((key) => setValue(key, formData[key]));
  }, [formData, setValue]);

  const handleInputChange = (e) => {
    dispatch(updateForm({ [e.target.name]: e.target.value }));
  };

  const onSubmit = async (data) => {
    console.log("Wysłano:", data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <div className="form-group">
          <label className="form-label">Numer pociągu</label>
          <input
            {...register("train_number", { required: "Numer pociągu jest wymagany", maxLength: 10 })}
            className="form-input"
            onChange={handleInputChange}
          />
          {errors.train_number && <p className="form-error">{errors.train_number.message}</p>}
        </div>

        <div className="form-group">
          <label className="form-label">Nazwa</label>
          <input
            {...register("name", { required: "Nazwa jest wymagana", maxLength: 100 })}
            className="form-input"
            onChange={handleInputChange}
          />
          {errors.name && <p className="form-error">{errors.name.message}</p>}
        </div>

        <div className="form-group">
          <label className="form-label">Liczba miejsc</label>
          <input
            type="number"
            {...register("total_seats", { required: "Liczba miejsc jest wymagana", min: 1 })}
            className="form-input"
            onChange={handleInputChange}
          />
          {errors.total_seats && <p className="form-error">{errors.total_seats.message}</p>}
        </div>

        <button type="submit" className="form-button">
          Wyślij
        </button>
      </form>
      <div>
        <h1>Strona główna</h1>
        <Link to="/">
          <a>Przejdź do glownej</a>
        </Link>
      </div>
    </div>

  );
};

export default TrainForm;
