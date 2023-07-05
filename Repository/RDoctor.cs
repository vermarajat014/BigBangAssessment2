using AngularAPIBigBang.Models;
using Microsoft.EntityFrameworkCore;

namespace AngularAPIBigBang.Repository
{
    public class RDoctor : IDoctor
    {
        private readonly DoctorDbcontext _dbcontext;

        public RDoctor(DoctorDbcontext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        public async Task<IEnumerable<Doctor>> GetDoctors()
        {
            var doctors = await _dbcontext.Set<Doctor>().Include(x => x.Patient).ToListAsync();
            return doctors;
        }

        public async Task AddDoctor(Doctor doctor)
        {
            try
            {
                await _dbcontext.Set<Doctor>().AddAsync(doctor);
                await _dbcontext.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                throw;
            }
        }

        public async Task DeleteDoctor(int id)
        {
            try
            {
                var doctor = await _dbcontext.Set<Doctor>().FindAsync(id);
                _dbcontext.Set<Doctor>().Remove(doctor);
                await _dbcontext.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                throw;
            }
        }

        public async Task<Doctor> GetDoctorById(int id)
        {
            var doctor = await _dbcontext.Set<Doctor>().FirstOrDefaultAsync(d => d.DId == id);
            return doctor;
        }


       

        public async Task UpdateDoctor(Doctor doctor)
        {
            try
            {
                _dbcontext.Entry(doctor).State = EntityState.Modified;
                await _dbcontext.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                throw;
            }
        }
    }
}
