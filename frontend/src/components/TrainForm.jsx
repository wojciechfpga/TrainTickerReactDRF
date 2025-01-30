import { useForm } from "react-hook-form";

const TrainForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/trains/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Błąd podczas wysyłania formularza");
      }

      alert("Dane zostały wysłane pomyślnie!");
    } catch (error) {
      console.error(error);
      alert("Wystąpił błąd");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 border rounded-lg shadow">
      <div className="mb-4">
        <label className="block font-bold">Numer pociągu</label>
        <input
          {...register("train_number", { required: "Numer pociągu jest wymagany", maxLength: 10 })}
          className="w-full p-2 border rounded"
        />
        {errors.train_number && <p className="text-red-500 text-sm">{errors.train_number.message}</p>}
      </div>
      
      <div className="mb-4">
        <label className="block font-bold">Nazwa</label>
        <input
          {...register("name", { required: "Nazwa jest wymagana", maxLength: 100 })}
          className="w-full p-2 border rounded"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>
      
      <div className="mb-4">
        <label className="block font-bold">Liczba miejsc</label>
        <input
          type="number"
          {...register("total_seats", { required: "Liczba miejsc jest wymagana", min: 1 })}
          className="w-full p-2 border rounded"
        />
        {errors.total_seats && <p className="text-red-500 text-sm">{errors.total_seats.message}</p>}
      </div>
      
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Wyślij
      </button>
    </form>
  );
};

export default TrainForm;
