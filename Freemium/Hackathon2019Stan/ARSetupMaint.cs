using System;
using PX.Data;
using PX.Objects.CR;
using PX.Objects.CS;
using PX.Objects.EP;
using PX.Objects.GL;
using System.Collections;
using System.Linq;
using System.Collections.Generic;
using PX.Objects;
using PX.Objects.AR;

namespace PX.Objects.AR
{
  public class ARSetupMaint_Extension : PXGraphExtension<ARSetupMaint>
  {
        #region Event Handlers
        public PXSelect<UserCredits, Where<UserCredits.userid, Equal<Current<AccessInfo.userID>>>> userCreditsRec;  
        #endregion
  }
}