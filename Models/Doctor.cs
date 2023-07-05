using System.ComponentModel.DataAnnotations;
using System.Diagnostics.Contracts;

namespace AngularAPIBigBang.Models
{
    public class Doctor
    {
        [Key]
        public int DId { get; set; }

        public string? DName { get; set; }

        public string? DSpecialization { get; set; }

        public string? DStatus { get; set; }

        public string? DAddress { get; set;}

        public string? DMobileNumber { get; set;}

        public ICollection<Patient>? Patient { get; set; }


    }
}
