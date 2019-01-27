using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using PX.Data;
using PX.Objects.CS;
using PX.Objects.AR;

public partial class Pages_HT_AddCredits : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

        var graph = PXGraph.CreateInstance<ARSetupMaint>();

        var graphExt = graph.GetExtension<ARSetupMaint_Extension>();

        UserCredits row = graphExt.userCreditsRec.Select().FirstOrDefault();

        if (row == null)
        {
            var newUser = new UserCredits()
            {
                Userid = graph.Accessinfo.UserID,
                Credits = 1
            };
            graphExt.userCreditsRec.Insert(newUser);
        }
        else
        {
            row.Credits = row.Credits + 1;
            graphExt.userCreditsRec.Update(row);
        }

        graph.Actions.PressSave();


    }
}