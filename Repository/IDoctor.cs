using AngularAPIBigBang.Models;

namespace AngularAPIBigBang.Repository
{
    public interface IDoctor
    {
        Task <Doctor> GetDoctorById(int id);
        Task <IEnumerable<Doctor>> GetDoctors();
        Task AddDoctor(Doctor doctor);
        Task UpdateDoctor(Doctor doctor);
        Task DeleteDoctor(int id);
    }
}
