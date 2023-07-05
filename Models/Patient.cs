using System.ComponentModel.DataAnnotations;

namespace AngularAPIBigBang.Models
{
    public class Patient
    {
        [Key]

        public int PId { get; set; }

        public string? PName { get; set; }

        public string? PAddress { get; set; }

        public int PAge { get; set; }

        public int DId { get; set; }

        public Doctor? Doctor { get; set; }
    }
}
