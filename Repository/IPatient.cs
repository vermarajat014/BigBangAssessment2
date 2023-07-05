using AngularAPIBigBang.Models;

namespace AngularAPIBigBang.Repository
{
    public interface IPatient
    {
        Task<Patient> GetPatientById(int id);
        Task<IEnumerable<Patient>> GetPatients();

        Task AddPatient(Patient patient);

        Task DeletePatient(int id);
        Task UpdatePatient(Patient patient);
    }
}
