using Microsoft.EntityFrameworkCore;

namespace AngularAPIBigBang.Models
{
    public class DoctorDbcontext : DbContext
    {
        public DoctorDbcontext(DbContextOptions<DoctorDbcontext> Options) : base(Options) { }

        public DbSet<Doctor> Doctor { get; set; }

        public DbSet<Patient> Patient { get; set; }

        public DbSet<User> Users { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Patient>()
                .HasOne(d => d.Doctor)
                .WithMany(p => p.Patient)
                .HasForeignKey(h => h.DId);
        }
    }
}
