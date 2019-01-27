using System;
using PX.Data;

namespace PX.Objects.CS
{
    [Serializable]
    public class UserCredits : IBqlTable
    {
        #region Userid
        [PXDBGuid(IsKey = true)]
        [PXUIField(DisplayName = "Userid")]
        public virtual Guid? Userid { get; set; }
        public abstract class userid : IBqlField { }
        #endregion

        #region Credits
        [PXDBDecimal()]
        [PXUIField(DisplayName = "Credits")]
        public virtual Decimal? Credits { get; set; }
        public abstract class credits : IBqlField { }
        #endregion

        #region DateIssued
        [PXDBDate()]
        [PXUIField(DisplayName = "Date Issued")]
        public virtual DateTime? DateIssued { get; set; }
        public abstract class dateIssued : IBqlField { }
        #endregion

        #region Tstamp
        [PXDBTimestamp()]
        [PXUIField(DisplayName = "Tstamp")]
        public virtual byte[] Tstamp { get; set; }
        public abstract class tstamp : IBqlField { }
        #endregion
    }
}