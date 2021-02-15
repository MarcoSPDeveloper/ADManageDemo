using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApi3.Models.Response;

namespace WebApi3.Mapper
{
    public static class ToLocationViewModel
    {
        public static IEnumerable<LocationViewModel> ConvertToLocationViewModel()
        {
            var vm = new LocationViewModel[] { 
                new LocationViewModel { FullName = "Lossburg", LocationID = "DE01" },
                new LocationViewModel { FullName = "Radevormwald", LocationID = "DE02" }
            };


           return vm;
        }
    }
}