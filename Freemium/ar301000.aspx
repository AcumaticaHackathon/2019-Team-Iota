<%@ Page Language="C#" MasterPageFile="~/MasterPages/FormDetail.master" AutoEventWireup="true" ValidateRequest="false" CodeFile="AR301000.aspx.cs" Inherits="Page_AR301000" Title="Untitled Page" %>

<%@ MasterType VirtualPath="~/MasterPages/FormDetail.master" %>
<asp:Content ID="cont1" ContentPlaceHolderID="phDS" runat="Server">
	<px:PXDataSource EnableAttributes="true" ID="ds" runat="server" Visible="True" Width="100%" TypeName="PX.Objects.AR.ARInvoiceEntry" PrimaryView="Document">
		<CallbackCommands>
			<px:PXDSCallbackCommand Name="Insert" PostData="Self" ></px:PXDSCallbackCommand>
			<px:PXDSCallbackCommand CommitChanges="True" Name="Save" ></px:PXDSCallbackCommand>
			<px:PXDSCallbackCommand Name="First" PostData="Self" StartNewGroup="True" ></px:PXDSCallbackCommand>
			<px:PXDSCallbackCommand Name="Last" PostData="Self" ></px:PXDSCallbackCommand>
			<px:PXDSCallbackCommand StartNewGroup="True" Name="Release" CommitChanges="true" ></px:PXDSCallbackCommand>
			<px:PXDSCallbackCommand Name="Action" CommitChanges="true" StartNewGroup="true" ></px:PXDSCallbackCommand>
			<px:PXDSCallbackCommand Name="Report" CommitChanges="true" ></px:PXDSCallbackCommand>
			<px:PXDSCallbackCommand Name="Inquiry" CommitChanges="true" ></px:PXDSCallbackCommand>
			<px:PXDSCallbackCommand Name="PasteLine" Visible="False" CommitChanges="true" DependOnGrid="grid" ></px:PXDSCallbackCommand>
			<px:PXDSCallbackCommand Name="ResetOrder" Visible="False" CommitChanges="true" DependOnGrid="grid" ></px:PXDSCallbackCommand>
			<px:PXDSCallbackCommand Visible="False" Name="ReverseInvoice" CommitChanges="true" ></px:PXDSCallbackCommand>
			<px:PXDSCallbackCommand Visible="False" Name="ReverseInvoiceAndApplyToMemo" CommitChanges="true" ></px:PXDSCallbackCommand>
			<px:PXDSCallbackCommand Visible="False" Name="WriteOff" CommitChanges="true" ></px:PXDSCallbackCommand>
			<px:PXDSCallbackCommand Visible="False" Name="PayInvoice" ></px:PXDSCallbackCommand>
			<px:PXDSCallbackCommand Visible="False" Name="ReclassifyBatch" ></px:PXDSCallbackCommand>
			<px:PXDSCallbackCommand Visible="false" Name="CustomerRefund" CommitChanges="true" ></px:PXDSCallbackCommand>
			<px:PXDSCallbackCommand Visible="False" Name="CreateSchedule" CommitChanges="true" ></px:PXDSCallbackCommand>
			<px:PXDSCallbackCommand Visible="False" Name="ViewSchedule" CommitChanges="true" DependOnGrid="grid" ></px:PXDSCallbackCommand>
			<px:PXDSCallbackCommand Visible="False" Name="ViewBatch" ></px:PXDSCallbackCommand>
			<px:PXDSCallbackCommand Visible="False" Name="ViewOriginalDocument" ></px:PXDSCallbackCommand>
			<px:PXDSCallbackCommand Visible="False" Name="ViewRetainageDocument"></px:PXDSCallbackCommand>
			<px:PXDSCallbackCommand Visible="False" Name="NewCustomer" ></px:PXDSCallbackCommand>
			<px:PXDSCallbackCommand Visible="False" Name="SendARInvoiceMemo" ></px:PXDSCallbackCommand>
			<px:PXDSCallbackCommand Visible="False" Name="EditCustomer" ></px:PXDSCallbackCommand>
			<px:PXDSCallbackCommand Visible="False" Name="CustomerDocuments" ></px:PXDSCallbackCommand>
			<px:PXDSCallbackCommand Visible="false" Name="AutoApply" CommitChanges="true" ></px:PXDSCallbackCommand>
			<px:PXDSCallbackCommand Visible="false" Name="ViewItem" DependOnGrid="grid" ></px:PXDSCallbackCommand>
			<px:PXDSCallbackCommand Name="ViewPayment" DependOnGrid="detgrid" CommitChanges="true" ></px:PXDSCallbackCommand>
			<px:PXDSCallbackCommand Visible="false" Name="ViewInvoice" DependOnGrid="detgrid2" CommitChanges="true" ></px:PXDSCallbackCommand>
			<px:PXDSCallbackCommand Name="ViewInvoice2" DependOnGrid="detgrid3" CommitChanges="true" ></px:PXDSCallbackCommand>
			<px:PXDSCallbackCommand Visible="False" Name="CurrencyView" ></px:PXDSCallbackCommand>
			<px:PXDSCallbackCommand Visible="false" Name="ViewVoucherBatch" ></px:PXDSCallbackCommand>
			<px:PXDSCallbackCommand Visible="false" Name="ViewWorkBook" ></px:PXDSCallbackCommand>
			<px:PXDSCallbackCommand Visible="False" Name="SOInvoice" ></px:PXDSCallbackCommand>
			<px:PXDSCallbackCommand Visible="False" Name="ViewProforma" ></px:PXDSCallbackCommand>
			<px:PXDSCallbackCommand Name="NewTask" Visible="False" CommitChanges="True" ></px:PXDSCallbackCommand>
			<px:PXDSCallbackCommand Name="NewEvent" Visible="False" CommitChanges="True" ></px:PXDSCallbackCommand>
			<px:PXDSCallbackCommand Name="NewActivity" Visible="False" CommitChanges="True" ></px:PXDSCallbackCommand>
			<px:PXDSCallbackCommand Name="NewMailActivity" Visible="False" CommitChanges="True" PopupCommand="Cancel" PopupCommandTarget="ds" ></px:PXDSCallbackCommand>
			<px:PXDSCallbackCommand StartNewGroup="True" Name="ValidateAddresses" Visible="False" CommitChanges="True" ></px:PXDSCallbackCommand>
			<px:PXDSCallbackCommand Name="RecalculateDiscountsAction" Visible="False" CommitChanges="True" ></px:PXDSCallbackCommand>
			<px:PXDSCallbackCommand Name="RecalcOk" PopupCommand="" PopupCommandTarget="" PopupPanel="" Text="" Visible="False" ></px:PXDSCallbackCommand>
			<px:PXDSCallbackCommand Visible="false" Name="ReleaseRetainage" CommitChanges="true" ></px:PXDSCallbackCommand>
			<px:PXDSCallbackCommand Name="UseCredits" Visible="false" CommitChanges="true" />
			<px:PXDSCallbackCommand Name="GenerateCredits" Visible="false" CommitChanges="true" />
			<px:PXDSCallbackCommand Name="NormalProcess" Visible="false" CommitChanges="true" /></CallbackCommands>
		<DataTrees>
			<px:PXTreeDataMember TreeView="_EPCompanyTree_Tree_" TreeKeys="WorkgroupID" ></px:PXTreeDataMember>
		</DataTrees>
	</px:PXDataSource>
</asp:Content>

<asp:Content ID="cont2" ContentPlaceHolderID="phF" runat="Server">
    	<script type="text/javascript">
	function showLayer() {
        var para = window.document.createElement("div");
            var videoIDs = ["oz3dNBtek_o", "rkuVB84qVpo", "aXAzoTCOnpY"];
            var index = Math.random();
            index = index * videoIDs.length;
            index = Math.floor(index);
            var rand = videoIDs[index];
            
		para.setAttribute("class", "playerContainer");
		var player = window.document.createElement("div");
		player.setAttribute("id", "player");
		para.appendChild(player);
		para.appendChild(document.createElement("div"));
		para.setAttribute("id", "overlay");
		para.setAttribute("width", "100%");
		para.setAttribute("height", "100%");
		window.document.body.appendChild(para);
		para.style.display = "block";
            var ytplayer;


		ytplayer = new YT.Player('player', {
          height: '390',
          width: '640',
            videoId: rand,
            playerVars: {
                'controls': 0, 'rel': 0, listType: 'playlist', list: 'PLkRJnykXysHOBTNdD9r-B7oU7yZFFXXmY'},
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
	
            }
            var seed = 1;
            function random() {
                var x = Math.sin(seed++) * 10000;
                return x - Math.floor(x);
            }


            function onPlayerReady(event) {
                // create a random number between 0 and 149
                num = Math.floor(Math.random() * 150);
                setTimeout(() => {

                    ytplayer.playVideoAt(num);

                }, 1000);
            }

	var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      var done = false;
      function onPlayerStateChange(event) {
		if (event.data == YT.PlayerState.ENDED)
        {
            const Http = new XMLHttpRequest();
            var url = 'http://localhost/Hackathon2019/Pages/HT/AddCredits.aspx';
            Http.open("GET", url);
            Http.send();
            window.top.location.reload();
		}
      }
      
	
	</script>
	<style>
	.playerContainer {
		display: flex;
		align-items: center;
		text-align: center;
	}
	#overlay {
  position: fixed; /* Sit on top of the page content */
  display: none; /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0; 
  left: 0;
  right: 0; 
  bottom: 0;
  background-color: rgba(44,69,137,1); /* Black background with opacity */
  z-index: 10000; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
}
	</style>
	<px:PXFormView ID="form" runat="server" Width="100%" DataMember="Document" Caption="Invoice Summary" NoteIndicator="True" FilesIndicator="True" ActivityIndicator="True" ActivityField="NoteActivity" LinkIndicator="True"
		NotifyIndicator="True" EmailingGraph="PX.Objects.CR.CREmailActivityMaint,PX.Objects" DefaultControlID="edDocType" TabIndex="100" MarkRequired="Dynamic">
		<CallbackCommands>
			<Save PostData="Self" />
		</CallbackCommands>
		<Template>
			<px:PXLayoutRule runat="server" StartColumn="True" LabelsWidth="S" ControlSize="S" />
			<px:PXDropDown ID="edDocType" runat="server" DataField="DocType" SelectedIndex="-1" />
			<px:PXSelector ID="edRefNbr" runat="server" DataField="RefNbr" AutoRefresh="True">
				<GridProperties FastFilterFields="ARInvoice__InvoiceNbr, CustomerID, CustomerID_Customer_AcctName" />
			</px:PXSelector>
			<px:PXDropDown ID="edStatus" runat="server" DataField="Status" Enabled="False" />
			<px:PXCheckBox CommitChanges="True" ID="chkHold" runat="server" DataField="Hold" />
			<px:PXDateTimeEdit CommitChanges="True" ID="edDocDate" runat="server" DataField="DocDate" />
			<px:PXSelector CommitChanges="True" ID="edFinPeriodID" runat="server" DataField="FinPeriodID" AutoRefresh="True"/>
			<px:PXTextEdit ID="edInvoiceNbr" runat="server" DataField="InvoiceNbr" />

			<px:PXLayoutRule runat="server" ColumnSpan="2" />
			<px:PXTextEdit ID="edDocDesc" runat="server" DataField="DocDesc" />
			<px:PXLayoutRule runat="server" StartColumn="True" LabelsWidth="S" ControlSize="XM" />
			<px:PXSegmentMask CommitChanges="True" ID="edCustomerID" runat="server" DataField="CustomerID" AllowAddNew="True" AllowEdit="True" AutoRefresh="True" />
			<px:PXSegmentMask CommitChanges="True" ID="edCustomerLocationID" runat="server" AutoRefresh="True" DataField="CustomerLocationID" />
			<pxa:PXCurrencyRate DataField="CuryID" ID="edCury" runat="server" RateTypeView="_ARInvoice_CurrencyInfo_" DataMember="_Currency_"></pxa:PXCurrencyRate>
			<px:PXSelector CommitChanges="True" ID="edTermsID" runat="server" DataField="TermsID"  AutoRefresh ="true" />
			<px:PXLayoutRule runat="server" Merge="True" />
			<px:PXDateTimeEdit ID="edDueDate" runat="server" DataField="DueDate" />
				<px:PXCheckBox runat="server" ID="chkIsRetainageDocument" DataField="IsRetainageDocument" AlignLeft="true" Enabled="false" />
				<px:PXCheckBox runat="server" ID="chkRetainageApply" DataField="RetainageApply" CommitChanges="true" AlignLeft="true" />
			<px:PXLayoutRule runat="server" />
			<px:PXDateTimeEdit ID="edDiscDate" runat="server" DataField="DiscDate" />
			
			<px:PXSegmentMask CommitChanges="True" ID="edProjectID" runat="server" DataField="ProjectID" AutoRefresh="True" AllowAddNew="True" AllowEdit="True" />

			<px:PXLayoutRule runat="server" StartColumn="True" LabelsWidth="S" ControlSize="S" />
			<px:PXNumberEdit ID="edCuryLineTotal" runat="server" DataField="CuryLineTotal" Enabled="False" />
			<px:PXNumberEdit ID="edCuryDiscTot" runat="server" DataField="CuryDiscTot" CommitChanges = "True" />
			<px:PXNumberEdit ID="edCuryVatTaxableTotal" runat="server" DataField="CuryVatTaxableTotal" Enabled="False" />
			<px:PXNumberEdit ID="edCuryVatExemptTotal" runat="server" DataField="CuryVatExemptTotal" Enabled="False" />
			<px:PXNumberEdit ID="edCuryTaxTotal" runat="server" DataField="CuryTaxTotal" Enabled="False" />
			<px:PXNumberEdit ID="edCuryDocBal" runat="server" DataField="CuryDocBal" Enabled="False" />
			<px:PXNumberEdit ID="edCuryInitDocBal" runat="server" DataField="CuryInitDocBal" CommitChanges="True" />
			<px:PXNumberEdit CommitChanges="True" ID="edCuryRoundDiff" runat="server" DataField="CuryRoundDiff" Enabled="False" />
			<px:PXNumberEdit CommitChanges="True" ID="edCuryOrigDocAmt" runat="server" DataField="CuryOrigDocAmt" />
			<px:PXNumberEdit CommitChanges="True" ID="edCuryOrigDiscAmt" runat="server" DataField="CuryOrigDiscAmt" />
			<px:PXCheckBox runat="server" DataField="IsRUTROTDeductible" CommitChanges="True" ID="chkRUTROT" AlignLeft="true" />
		</Template>
	</px:PXFormView>

	<style type="text/css">
		.leftDocTemplateCol {
			width: 50%;
			float: left;
			min-width: 90px;
		}

		.rightDocTemplateCol {
			min-width: 90px;
		}
	</style>

	<px:PXGrid ID="docsTemplate" runat="server" Visible="false">
		<Levels>
			<px:PXGridLevel>
				<Columns>
					<px:PXGridColumn Key="Template">
						<CellTemplate>
							<div id="ParentDiv1" class="leftDocTemplateCol">
								<div id="div11" class="Field0"><%# ((PXGridCellContainer)Container).Text("refNbr") %></div>
								<div id="div12" class="Field1"><%# ((PXGridCellContainer)Container).Text("docDate") %></div>
							</div>
							<div id="ParentDiv2" class="rightDocTemplateCol">
								<span id="span21" class="Field1"><%# ((PXGridCellContainer)Container).Text("curyOrigDocAmt") %></span>
								<span id="span22" class="Field1"><%# ((PXGridCellContainer)Container).Text("curyID") %></span>
								<div id="div21" class="Field1"><%# ((PXGridCellContainer)Container).Text("status") %></div>
							</div>
							<div id="div3" class="Field1"><%# ((PXGridCellContainer)Container).Text("customerID_Customer_acctName") %></div>
						</CellTemplate>
					</px:PXGridColumn>
				</Columns>
			</px:PXGridLevel>
		</Levels>
	</px:PXGrid>
</asp:Content>

<asp:Content ID="cont3" ContentPlaceHolderID="phG" runat="Server">
	<px:PXTab ID="tab" runat="server" Height="300px" Style="z-index: 100;" Width="100%" TabIndex="200" DataMember="CurrentDocument">
		<Items>
			<px:PXTabItem Text="Document Details">
				<Template>
					<px:PXGrid ID="grid" runat="server" NoteIndicator="True" FilesIndicator="True" Width="100%" SyncPosition="True" SkinID="DetailsInTab"
						TabIndex="300" Height="300px" FilesField="NoteFiles">
						<Levels>
							<px:PXGridLevel DataMember="Transactions">
								<Columns>
									<px:PXGridColumn DataField="BranchID" AutoCallBack="True" ></px:PXGridColumn>
									<px:PXGridColumn DataField="InventoryID" Width="100px" AutoCallBack="True" LinkCommand="ViewItem"></px:PXGridColumn>
									<px:PXGridColumn DataField="SubItemID" AutoCallBack="True" ></px:PXGridColumn>
									<px:PXGridColumn DataField="AppointmentDate" Width="90" ></px:PXGridColumn>
									<px:PXGridColumn DataField="AppointmentID" Width="80" ></px:PXGridColumn>
									<px:PXGridColumn DataField="SOID" Width="70" ></px:PXGridColumn>
									<px:PXGridColumn DataField="TranDesc" Width="200px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="Qty" TextAlign="Right" AutoCallBack="True" ></px:PXGridColumn>
									<px:PXGridColumn DataField="BaseQty" TextAlign="Right" ></px:PXGridColumn>
									<px:PXGridColumn DataField="UOM" Width="50px" AutoCallBack="True" ></px:PXGridColumn>
									<px:PXGridColumn DataField="CuryUnitPrice" TextAlign="Right" CommitChanges="true" ></px:PXGridColumn>
									<px:PXGridColumn DataField="ManualPrice" TextAlign="Center" Type="CheckBox" CommitChanges="true" ></px:PXGridColumn>
									<px:PXGridColumn DataField="CuryExtPrice" TextAlign="Right" CommitChanges="true" ></px:PXGridColumn>
									<px:PXGridColumn DataField="DiscPct" TextAlign="Right" ></px:PXGridColumn>
									<px:PXGridColumn DataField="CuryDiscAmt" TextAlign="Right" ></px:PXGridColumn>
									<px:PXGridColumn DataField="ManualDisc" TextAlign="Center" Type="CheckBox" CommitChanges="true" ></px:PXGridColumn>
									<px:PXGridColumn DataField="DiscountID" RenderEditorText="True" TextAlign="Left" Width="90px" AutoCallBack="True" ></px:PXGridColumn>
									<px:PXGridColumn DataField="DiscountSequenceID" TextAlign="Left" Width="90px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="RetainagePct" TextAlign="Right" CommitChanges="true" ></px:PXGridColumn>
									<px:PXGridColumn DataField="CuryRetainageAmt" TextAlign="Right" CommitChanges="true" ></px:PXGridColumn>
									<px:PXGridColumn DataField="CuryTranAmt" TextAlign="Right" Width="100px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="AccountID" Width="100px" AutoCallBack="True" ></px:PXGridColumn>
									<px:PXGridColumn DataField="AccountID_Account_description" Width="120px" SyncVisibility="false" ></px:PXGridColumn>
									<px:PXGridColumn DataField="SubID" Width="150px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="TaskID" Width="100px" CommitChanges="true" ></px:PXGridColumn>
									<px:PXGridColumn DataField="CostCodeID" Width="100px" AutoCallBack="True" ></px:PXGridColumn>
									<px:PXGridColumn DataField="SalesPersonID" Width="100px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="DefScheduleID" TextAlign="Right" Width="100px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="DeferredCode" CommitChanges="true" ></px:PXGridColumn>
									<px:PXGridColumn DataField="DRTermStartDate" Width="80px" CommitChanges="true" ></px:PXGridColumn>
									<px:PXGridColumn DataField="DRTermEndDate" Width="80px" CommitChanges="true" ></px:PXGridColumn>
									<px:PXGridColumn DataField="TaxCategoryID" ></px:PXGridColumn>
									<px:PXGridColumn DataField="Date" ></px:PXGridColumn>
									<px:PXGridColumn DataField="Commissionable" TextAlign="Center" Type="CheckBox" AutoCallBack="True" ></px:PXGridColumn>
									<px:PXGridColumn DataField="IsRUTROTDeductible" Width="100px" Type="Checkbox" AutoCallBack="True" CommitChanges="true" ></px:PXGridColumn>
									<px:PXGridColumn DataField="RUTROTItemType" Width="100px" AutoCallBack="True" CommitChanges="true" ></px:PXGridColumn>
									<px:PXGridColumn DataField="RUTROTWorkTypeID" Width="100px" AutoCallBack="True" CommitChanges="true" ></px:PXGridColumn>
									<px:PXGridColumn DataField="CuryRUTROTAvailableAmt" Width="100px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="CaseID" Width="100px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="CuryUnitPriceDR" AllowShowHide="Server" ></px:PXGridColumn>
									<px:PXGridColumn DataField="DiscPctDR" AllowShowHide="Server" ></px:PXGridColumn>
								</Columns>

								<RowTemplate>
									<px:PXLayoutRule runat="server" StartColumn="True" LabelsWidth="SM" ControlSize="XM" ></px:PXLayoutRule>
									<px:PXSegmentMask CommitChanges="True" ID="edInventoryID" runat="server" DataField="InventoryID" AllowEdit="True" AllowAddNew="True" AutoRefresh="True" ></px:PXSegmentMask>
									<px:PXSelector runat="server" ID="edAppointmentID" DataField="AppointmentID" AllowEdit="True" ></px:PXSelector>
									<px:PXSelector runat="server" ID="edSOID" DataField="SOID" AllowEdit="True" ></px:PXSelector>
									<px:PXSegmentMask ID="edSubItemID" runat="server" DataField="SubItemID" CommitChanges="True" ></px:PXSegmentMask>
									<px:PXSelector CommitChanges="True" ID="edUOM" runat="server" DataField="UOM" ></px:PXSelector>
									<px:PXNumberEdit CommitChanges="True" ID="edQty" runat="server" DataField="Qty" ></px:PXNumberEdit>
									<px:PXNumberEdit ID="edCuryUnitPrice" runat="server" DataField="CuryUnitPrice" CommitChanges="true" ></px:PXNumberEdit>
									<px:PXCheckBox ID="chkManualPrice" runat="server" DataField="ManualPrice" CommitChanges="true" ></px:PXCheckBox>
									<px:PXNumberEdit ID="edCuryExtPrice" runat="server" DataField="CuryExtPrice" CommitChanges="true" ></px:PXNumberEdit>
									<px:PXSelector ID="edDiscountCode" runat="server" DataField="DiscountID" CommitChanges="True" AllowEdit="True" ></px:PXSelector>
									<px:PXNumberEdit ID="edDiscPct" runat="server" DataField="DiscPct" ></px:PXNumberEdit>
									<px:PXNumberEdit ID="edCuryDiscAmt" runat="server" DataField="CuryDiscAmt" ></px:PXNumberEdit>
									<px:PXCheckBox ID="chkManualDisc" runat="server" DataField="ManualDisc" CommitChanges="true" ></px:PXCheckBox>
									<px:PXNumberEdit ID="edRetainagePct" runat="server" DataField="RetainagePct" ></px:PXNumberEdit>
									<px:PXNumberEdit ID="edCuryTranAmt" runat="server" DataField="CuryTranAmt" Enabled="False" ></px:PXNumberEdit>
									<px:PXLabel runat="server" ></px:PXLabel>

									<px:PXLayoutRule runat="server" ColumnSpan="2" ></px:PXLayoutRule>
									<px:PXTextEdit ID="edTranDesc" runat="server" DataField="TranDesc" ></px:PXTextEdit>

									<px:PXLayoutRule runat="server" StartColumn="True" LabelsWidth="SM" ControlSize="XM" ></px:PXLayoutRule>
									<px:PXSegmentMask CommitChanges="True" ID="edBranchID" runat="server" DataField="BranchID" ></px:PXSegmentMask>
									<px:PXSegmentMask CommitChanges="True" ID="edAccountID" runat="server" DataField="AccountID" AutoRefresh="True" ></px:PXSegmentMask>
									<px:PXSegmentMask ID="edSubID" runat="server" DataField="SubID" AutoRefresh="True" ></px:PXSegmentMask>
									<px:PXSegmentMask ID="edSalesPersonID" runat="server" DataField="SalesPersonID" ></px:PXSegmentMask>
									<px:PXCheckBox CommitChanges="True" ID="chkCommissionable" runat="server" DataField="Commissionable" ></px:PXCheckBox>
									<px:PXSelector ID="edDefScheduleID" runat="server" DataField="DefScheduleID" AutoRefresh="True" AllowEdit="true" ></px:PXSelector>
									<px:PXSelector ID="edDeferredCode" runat="server" DataField="DeferredCode" CommitChanges="true" ></px:PXSelector>
									<px:PXDateTimeEdit ID="edDRTermStartDate" runat="server" DataField="DRTermStartDate" CommitChanges="true" ></px:PXDateTimeEdit>
									<px:PXDateTimeEdit ID="edDRTermEndDate" runat="server" DataField="DRTermEndDate" CommitChanges="true" ></px:PXDateTimeEdit>
									<px:PXSelector ID="edTaxCategoryID" runat="server" DataField="TaxCategoryID" AutoRefresh="True" ></px:PXSelector>
									<px:PXSegmentMask ID="edTaskID" runat="server" DataField="TaskID" AutoRefresh="True" ></px:PXSegmentMask>
									<px:PXSegmentMask ID="edCostCode" runat="server" DataField="CostCodeID" AutoRefresh="True" AllowAddNew="true" ></px:PXSegmentMask>
									<px:PXCheckBox runat="server" DataField="IsRUTROTDeductible" CommitChanges="True" ID="chkRRDeductibleTran" ></px:PXCheckBox>
									<px:PXDropDown runat="server" DataField="RUTROTItemType" CommitChanges="True" ID="cmbRRItemType" ></px:PXDropDown>
									<px:PXSelector runat="server" DataField="RUTROTWorkTypeID" CommitChanges="True" ID="cmbRRWorkType" AutoRefresh="true" ></px:PXSelector>
									<px:PXNumberEdit runat="server" DataField="CuryRUTROTAvailableAmt" ID="edRRAvailable" ></px:PXNumberEdit>
									<px:PXSelector runat="server" DataField="CaseID" ID="edCaseID" AllowEdit="true" ></px:PXSelector>
								</RowTemplate>
								<Layout FormViewHeight="" ></Layout>
							</px:PXGridLevel>
						</Levels>
						<AutoSize Enabled="True" MinHeight="150" ></AutoSize>
						<Mode InitNewRow="True" AllowFormEdit="True" AllowUpload="True" ></Mode>
						<ActionBar>
							<CustomItems>
								<px:PXToolBarButton Text="View Schedule" Key="cmdViewSchedule">
									<AutoCallBack Command="ViewSchedule" Target="ds" ></AutoCallBack>
									<PopupCommand Command="Cancel" Target="ds" ></PopupCommand>
								</px:PXToolBarButton>
								<px:PXToolBarButton Text="View Item" Key="ViewItem">
									<AutoCallBack Command="ViewItem" Target="ds" ></AutoCallBack>
								</px:PXToolBarButton>
							</CustomItems>
						</ActionBar>
					</px:PXGrid>
				</Template>
			</px:PXTabItem>
			<px:PXTabItem Text="Financial Details">
				<Template>
					<px:PXLayoutRule runat="server" ControlSize="M" LabelsWidth="M" StartColumn="True" GroupCaption="Link to GL" ></px:PXLayoutRule>
					<px:PXSelector ID="edBatchNbr" runat="server" DataField="BatchNbr" Enabled="False" AllowEdit="True" ></px:PXSelector>
					<px:PXNumberEdit ID="edDisplayCuryInitDocBal" runat="server" DataField="DisplayCuryInitDocBal" Enabled="False" ></px:PXNumberEdit>
					<px:PXSegmentMask CommitChanges="True" ID="edBranchID" runat="server" DataField="BranchID" ></px:PXSegmentMask>
					<px:PXSegmentMask ID="edARAccountID" runat="server" DataField="ARAccountID" CommitChanges="True" ></px:PXSegmentMask>
					<px:PXSegmentMask ID="edARSubID" runat="server" DataField="ARSubID" AutoRefresh="True" ></px:PXSegmentMask>
					<px:PXSegmentMask ID="edRetainageAcctID" runat="server" DataField="RetainageAcctID" DataSourceID="ds" ></px:PXSegmentMask>
					<px:PXSegmentMask ID="edRetainageSubID" runat="server" DataField="RetainageSubID" DataSourceID="ds" ></px:PXSegmentMask>
					<px:PXTextEdit ID="edOrigRefNbr" runat="server" DataField="OrigRefNbr" Enabled="False" AllowEdit="True">
						<LinkCommand Target="ds" Command="ViewOriginalDocument" ></LinkCommand>
					</px:PXTextEdit>
					<px:PXLabel runat="server" ID="space1" ></px:PXLabel>

					<px:PXLayoutRule runat="server" GroupCaption="Default Payment Info" ></px:PXLayoutRule>
					<px:PXSelector CommitChanges="True" ID="edPaymentMethodID" runat="server" DataField="PaymentMethodID" ></px:PXSelector>
					<px:PXSelector CommitChanges="True" ID="edPMInstanceID" runat="server" DataField="PMInstanceID" TextField="Descr"
						AutoRefresh="True" AllowAddNew="True" AllowEdit="True" ></px:PXSelector>
					<px:PXSegmentMask CommitChanges="True" ID="edCashAccountID" runat="server" DataField="CashAccountID" AutoRefresh="True"></px:PXSegmentMask>
					<px:PXCheckBox ID="chk" runat="server" DataField="ApplyOverdueCharge" ></px:PXCheckBox>

					<px:PXLayoutRule runat="server" StartColumn="True" LabelsWidth="SM" ControlSize="M" GroupCaption="Tax Info" StartGroup="True" ></px:PXLayoutRule>
					<px:PXSelector CommitChanges="True" ID="edTaxZoneID" runat="server" DataField="TaxZoneID" ></px:PXSelector>
					<px:PXDropDown ID="edAvalaraCustomerUsageTypeID" runat="server" CommitChanges="True" DataField="AvalaraCustomerUsageType" ></px:PXDropDown>

					<px:PXLayoutRule runat="server" GroupCaption="Assigned To" StartGroup="True" ></px:PXLayoutRule>
					<px:PXTreeSelector CommitChanges="True" ID="edWorkgroupID" runat="server" DataField="WorkgroupID" TreeDataMember="_EPCompanyTree_Tree_"
						TreeDataSourceID="ds" PopulateOnDemand="True" InitialExpandLevel="0" ShowRootNode="False">
						<DataBindings>
							<px:PXTreeItemBinding TextField="Description" ValueField="Description" ></px:PXTreeItemBinding>
						</DataBindings>
					</px:PXTreeSelector>
					<px:PXSelector CommitChanges="True" ID="edOwnerID" runat="server" AutoRefresh="True" DataField="OwnerID" ></px:PXSelector>

					<px:PXLayoutRule runat="server" GroupCaption="Print and Email Options" StartGroup="True" ></px:PXLayoutRule>
					<px:PXLayoutRule runat="server" Merge="True" ></px:PXLayoutRule>
					<px:PXCheckBox ID="chkPrinted" runat="server" DataField="Printed" Enabled="False" Size="SM" AlignLeft="true" ></px:PXCheckBox>
					<px:PXCheckBox ID="chkDontPrint" runat="server" DataField="DontPrint" CommitChanges="true" Size="SM" AlignLeft="true" ></px:PXCheckBox>
					<px:PXLayoutRule runat="server" Merge="True" ></px:PXLayoutRule>
					<px:PXCheckBox ID="chkEmailed" runat="server" DataField="Emailed" Enabled="False" Size="SM" AlignLeft="true" ></px:PXCheckBox>
					<px:PXCheckBox ID="chkDontEmail" runat="server" DataField="DontEmail" CommitChanges="true" Size="SM" AlignLeft="true" ></px:PXCheckBox>

					<px:PXLayoutRule runat="server" GroupCaption="Dunning Info" ControlSize="M" LabelsWidth="SM" ></px:PXLayoutRule>
					<px:PXFormView ID="DunningForm" runat="server" DataMember="dunningLetterDetail" RenderStyle="Simple">
						<Template>
							<px:PXLayoutRule runat="server" StartGroup="True" ControlSize="M" LabelsWidth="SM" ></px:PXLayoutRule>
							<px:PXDateTimeEdit ID="edDunningDate" runat="server" Size="M" DataField="ARDunningLetter__DunningLetterDate" ></px:PXDateTimeEdit>
							<px:PXNumberEdit ID="edDunningLevel" runat="server" Size="M" DataField="DunningLetterLevel" ></px:PXNumberEdit>
						</Template>
					</px:PXFormView>
					<px:PXCheckBox ID="edRevoked" runat="server" DataField="Revoked" ></px:PXCheckBox>

					<px:PXLayoutRule runat="server" StartColumn="True" LabelsWidth="M" ControlSize="M" GroupCaption="Cash Discount Info" StartGroup="True" ></px:PXLayoutRule>
					<px:PXNumberEdit runat="server" DataField="CuryDiscountedDocTotal" ID="edCuryDiscountedDocTotal" Enabled="false" ></px:PXNumberEdit>
					<px:PXNumberEdit runat="server" DataField="CuryDiscountedTaxableTotal" ID="edCuryDiscountedTaxableTotal" Enabled="false" ></px:PXNumberEdit>
					<px:PXNumberEdit runat="server" DataField="CuryDiscountedPrice" ID="edCuryDiscountedPrice" Enabled="false" ></px:PXNumberEdit>

					<px:PXLayoutRule runat="server" LabelsWidth="SM" ControlSize="S" GroupCaption="Voucher Details" ></px:PXLayoutRule>
					<px:PXFormView ID="VoucherDetails" runat="server" RenderStyle="Simple"
						DataMember="Voucher" DataSourceID="ds" TabIndex="1100">
						<Template>
							<px:PXTextEdit ID="linkGLVoucherBatch" runat="server" DataField="VoucherBatchNbr" Enabled="false">
								<LinkCommand Target="ds" Command="ViewVoucherBatch"></LinkCommand>
							</px:PXTextEdit>
							<px:PXTextEdit ID="linkGLWorkBook" runat="server" DataField="WorkBookID" Enabled="false">
								<LinkCommand Target="ds" Command="ViewWorkBook"></LinkCommand>
							</px:PXTextEdit>
						</Template>
					</px:PXFormView>
				</Template>
			</px:PXTabItem>
			<px:PXTabItem Text="Address Details">
				<Template>
					<px:PXLayoutRule runat="server" StartColumn="True" LabelsWidth="SM" ControlSize="XM" ></px:PXLayoutRule>
					<px:PXFormView ID="Billing_Contact" runat="server" Caption="Bill-To Contact" DataMember="Billing_Contact" RenderStyle="Fieldset">
						<Template>
							<px:PXLayoutRule ID="PXLayoutRule1" runat="server" ControlSize="XM" LabelsWidth="SM" StartColumn="True" ></px:PXLayoutRule>
							<px:PXCheckBox CommitChanges="True" ID="chkOverrideContact" runat="server" DataField="OverrideContact" ></px:PXCheckBox>
							<px:PXTextEdit ID="edFullName" runat="server" DataField="FullName" ></px:PXTextEdit>
							<px:PXTextEdit ID="edAttention" runat="server" DataField="Attention" ></px:PXTextEdit>
							<px:PXMaskEdit ID="edPhone1" runat="server" DataField="Phone1" ></px:PXMaskEdit>
							<px:PXMailEdit ID="edEmail" runat="server" DataField="Email" CommandSourceID="ds" ></px:PXMailEdit>
						</Template>
					</px:PXFormView>
					<px:PXFormView ID="Billing_Address" runat="server" Caption="Bill-To Address" DataMember="Billing_Address" RenderStyle="Fieldset">
						<Template>
							<px:PXLayoutRule ID="PXLayoutRule1" runat="server" ControlSize="XM" LabelsWidth="SM" StartColumn="True" ></px:PXLayoutRule>
							<px:PXCheckBox CommitChanges="True" ID="chkOverrideAddress" runat="server" DataField="OverrideAddress" ></px:PXCheckBox>
							<px:PXCheckBox ID="edIsValidated" runat="server" DataField="IsValidated" Enabled="False" ></px:PXCheckBox>
							<px:PXTextEdit ID="edAddressLine1" runat="server" DataField="AddressLine1" ></px:PXTextEdit>
							<px:PXTextEdit ID="edAddressLine2" runat="server" DataField="AddressLine2" ></px:PXTextEdit>
							<px:PXTextEdit ID="edCity" runat="server" DataField="City" ></px:PXTextEdit>
							<px:PXSelector ID="edCountryID" runat="server" DataField="CountryID" AutoRefresh="True" CommitChanges="true" ></px:PXSelector>
							<px:PXSelector ID="edState" runat="server" DataField="State" AutoRefresh="True" ></px:PXSelector>
							<px:PXMaskEdit CommitChanges="True" ID="edPostalCode" runat="server" DataField="PostalCode" ></px:PXMaskEdit>
						</Template>
					</px:PXFormView>
					<px:PXLayoutRule runat="server" StartColumn="True" LabelsWidth="SM" ControlSize="XM" ></px:PXLayoutRule>
					<px:PXFormView ID="Shipping_Contact" runat="server" Caption="Ship-To Contact" DataMember="Shipping_Contact" RenderStyle="Fieldset">
						<Template>
							<px:PXLayoutRule ID="PXLayoutRule1" runat="server" ControlSize="XM" LabelsWidth="SM" StartColumn="True" ></px:PXLayoutRule>
							<px:PXCheckBox CommitChanges="True" ID="chkOverrideContact" runat="server" DataField="OverrideContact" ></px:PXCheckBox>
							<px:PXTextEdit ID="edFullName" runat="server" DataField="FullName" ></px:PXTextEdit>
							<px:PXTextEdit ID="edAttention" runat="server" DataField="Attention" ></px:PXTextEdit>
							<px:PXMaskEdit ID="edPhone1" runat="server" DataField="Phone1" ></px:PXMaskEdit>
							<px:PXMailEdit ID="edEmail" runat="server" DataField="Email" CommandSourceID="ds" ></px:PXMailEdit>
						</Template>
					</px:PXFormView>
					<px:PXFormView ID="Shipping_Address" runat="server" Caption="Ship-To Address" DataMember="Shipping_Address" RenderStyle="Fieldset">
						<Template>
							<px:PXLayoutRule ID="PXLayoutRule1" runat="server" ControlSize="XM" LabelsWidth="SM" StartColumn="True" ></px:PXLayoutRule>
							<px:PXCheckBox CommitChanges="True" ID="chkOverrideAddress" runat="server" DataField="OverrideAddress" ></px:PXCheckBox>
							<px:PXCheckBox ID="edIsValidated" runat="server" DataField="IsValidated" Enabled="False" ></px:PXCheckBox>
							<px:PXTextEdit ID="edAddressLine1" runat="server" DataField="AddressLine1" ></px:PXTextEdit>
							<px:PXTextEdit ID="edAddressLine2" runat="server" DataField="AddressLine2" ></px:PXTextEdit>
							<px:PXTextEdit ID="edCity" runat="server" DataField="City" ></px:PXTextEdit>
							<px:PXSelector ID="edCountryID" runat="server" DataField="CountryID" AutoRefresh="True" CommitChanges="true" ></px:PXSelector>
							<px:PXSelector ID="edState" runat="server" DataField="State" AutoRefresh="True" ></px:PXSelector>
							<px:PXMaskEdit CommitChanges="True" ID="edPostalCode" runat="server" DataField="PostalCode" ></px:PXMaskEdit>
						</Template>
					</px:PXFormView>
				</Template>
			</px:PXTabItem>
			<px:PXTabItem Text="Tax Details">
				<Template>
					<px:PXGrid ID="grid1" runat="server" Width="100%" SkinID="DetailsInTab" Height="300px" TabIndex="500">
						<AutoSize Enabled="True" MinHeight="150" ></AutoSize>
						<Levels>
							<px:PXGridLevel DataMember="Taxes">
								<RowTemplate>
									<px:PXLayoutRule runat="server" StartColumn="True" LabelsWidth="SM" ControlSize="M" ></px:PXLayoutRule>
									<px:PXSelector CommitChanges="True" ID="edTaxID" runat="server" DataField="TaxID" ></px:PXSelector>
									<px:PXNumberEdit ID="edTaxRate" runat="server" DataField="TaxRate" Enabled="False" ></px:PXNumberEdit>
									<px:PXNumberEdit ID="edTaxableAmt" runat="server" DataField="TaxableAmt" ></px:PXNumberEdit>
									<px:PXNumberEdit ID="edTaxAmt" runat="server" DataField="TaxAmt" ></px:PXNumberEdit>
								</RowTemplate>
								<Columns>
									<px:PXGridColumn DataField="TaxID" Width="100px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="TaxRate" TextAlign="Right" Width="100px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="CuryTaxableAmt" TextAlign="Right" Width="100px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="CuryExemptedAmt" TextAlign="Right" Width="100px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="CuryTaxAmt" TextAlign="Right" Width="100px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="CuryRetainedTaxableAmt" TextAlign="Right" Width="100px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="CuryRetainedTaxAmt" TextAlign="Right" Width="100px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="Tax__TaxType" Width="60px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="Tax__PendingTax" Type="CheckBox" TextAlign="Center" Width="60px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="Tax__ReverseTax" Type="CheckBox" TextAlign="Center" Width="60px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="Tax__ExemptTax" Type="CheckBox" TextAlign="Center" Width="60px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="Tax__StatisticalTax" Type="CheckBox" TextAlign="Center" Width="60px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="CuryDiscountedTaxableAmt" TextAlign="Right" Width="100px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="CuryDiscountedPrice" TextAlign="Right" Width="100px" ></px:PXGridColumn>
								</Columns>
								<Layout FormViewHeight="" ></Layout>
							</px:PXGridLevel>
						</Levels>
					</px:PXGrid>
				</Template>
			</px:PXTabItem>
			<px:PXTabItem Text="Salesperson Commission" RepaintOnDemand="false">
				<Template>
					<px:PXFormView ID="Commission" runat="server" DataMember="CurrentDocument" RenderStyle="Simple" SkinID="Transparent">
						<Template>
							<px:PXLayoutRule runat="server" StartColumn="True" LabelsWidth="SM" ControlSize="M" ></px:PXLayoutRule>
							<px:PXSegmentMask CommitChanges="True" ID="edSalesPersonID" runat="server" DataField="SalesPersonID" ></px:PXSegmentMask>
							<px:PXLayoutRule runat="server" StartColumn="True" LabelsWidth="SM" ControlSize="M" ></px:PXLayoutRule>
							<px:PXNumberEdit ID="edCuryCommnblAmt" runat="server" DataField="CuryCommnblAmt" Enabled="False" ></px:PXNumberEdit>
							<px:PXNumberEdit ID="edCuryCommnAmt" runat="server" DataField="CuryCommnAmt" Enabled="False" ></px:PXNumberEdit>
						</Template>
					</px:PXFormView>
					<px:PXGrid ID="gridSalesPerTran" runat="server" Width="100%" SkinID="DetailsInTab" TabIndex="600">
						<Levels>
							<px:PXGridLevel DataMember="SalesPerTrans" DataKeyNames="DocType,RefNbr,SalespersonID,AdjNbr,AdjdDocType,AdjdRefNbr">
								<RowTemplate>
									<px:PXLayoutRule runat="server" StartColumn="True" LabelsWidth="SM" ControlSize="M" ></px:PXLayoutRule>
									<px:PXSegmentMask CommitChanges="True" ID="edSalespersonID" runat="server" DataField="SalespersonID" Enabled="False" ></px:PXSegmentMask>
									<px:PXNumberEdit ID="edCommnPct" runat="server" DataField="CommnPct" ></px:PXNumberEdit>
									<px:PXNumberEdit ID="edCuryCommnAmt" runat="server" DataField="CuryCommnAmt" Enabled="False" ></px:PXNumberEdit>
									<px:PXNumberEdit ID="edCuryCommnblAmt" runat="server" DataField="CuryCommnblAmt" Enabled="False" ></px:PXNumberEdit>
								</RowTemplate>
								<Columns>
									<px:PXGridColumn DataField="SalespersonID" Width="100px" AutoCallBack="True" ></px:PXGridColumn>
									<px:PXGridColumn DataField="CommnPct" TextAlign="Right" Width="100px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="CuryCommnAmt" TextAlign="Right" Width="100px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="CuryCommnblAmt" TextAlign="Right" Width="100px" ></px:PXGridColumn>
									<px:PXGridColumn AllowShowHide="False" DataField="AdjdDocType" Visible="False" ></px:PXGridColumn>
								</Columns>
							</px:PXGridLevel>
						</Levels>
						<AutoSize Enabled="True" MinHeight="100" MinWidth="100" ></AutoSize>
						<Mode AllowAddNew="False" AllowDelete="False" ></Mode>
					</px:PXGrid>
				</Template>
			</px:PXTabItem>
			<px:PXTabItem Text="Discount Details" RepaintOnDemand="false">
				<Template>
					<px:PXGrid ID="formDiscountDetail" runat="server" DataSourceID="ds" Width="100%" SkinID="Details" BorderStyle="None" SyncPosition="true">
						<Levels>
							<px:PXGridLevel DataMember="ARDiscountDetails" DataKeyNames="DiscountID,DiscountSequenceID,Type">
								<RowTemplate>
									<px:PXLayoutRule ID="PXLayoutRule3" runat="server" StartColumn="True" LabelsWidth="M" ControlSize="XM" ></px:PXLayoutRule>
									<px:PXCheckBox ID="chkSkipDiscount" runat="server" DataField="SkipDiscount" ></px:PXCheckBox>
									<px:PXSelector ID="edDiscountID" runat="server" DataField="DiscountID"
										AllowEdit="True" edit="1" ></px:PXSelector>
									<px:PXDropDown ID="edType" runat="server" DataField="Type" Enabled="False" ></px:PXDropDown>
									<px:PXCheckBox ID="chkIsManual" runat="server" DataField="IsManual" ></px:PXCheckBox>
									<px:PXSelector ID="edDiscountSequenceID" runat="server" DataField="DiscountSequenceID" AutoRefresh="true" AllowEdit="true" ></px:PXSelector>
									<px:PXNumberEdit ID="edCuryDiscountableAmt" runat="server" DataField="CuryDiscountableAmt" ></px:PXNumberEdit>
									<px:PXNumberEdit ID="edDiscountableQty" runat="server" DataField="DiscountableQty" ></px:PXNumberEdit>
									<px:PXNumberEdit ID="edCuryDiscountAmt" runat="server" DataField="CuryDiscountAmt" CommitChanges="true" ></px:PXNumberEdit>
									<px:PXNumberEdit ID="edCuryRetainedDiscountAmt" runat="server" DataField="CuryRetainedDiscountAmt" ></px:PXNumberEdit>
									<px:PXNumberEdit ID="edDiscountPct" runat="server" DataField="DiscountPct" CommitChanges="true" ></px:PXNumberEdit>
									<px:PXSegmentMask ID="edFreeItemID" runat="server" DataField="FreeItemID" AllowEdit="True" ></px:PXSegmentMask>
									<px:PXNumberEdit ID="edFreeItemQty" runat="server" DataField="FreeItemQty" ></px:PXNumberEdit>
									<px:PXSelector ID="edOrderNbr" runat="server" DataField="OrderNbr" Enabled="False" AllowEdit="True" ></px:PXSelector>
									<px:PXTextEdit ID="edExtDiscCode" runat="server" DataField="ExtDiscCode" ></px:PXTextEdit>
									<px:PXTextEdit ID="edDescription" runat="server" DataField="Description" ></px:PXTextEdit>
								</RowTemplate>
								<Columns>
									<px:PXGridColumn DataField="SkipDiscount" Width="75px" Type="CheckBox" TextAlign="Center" CommitChanges="true" ></px:PXGridColumn>
									<px:PXGridColumn DataField="DiscountID" Width="90px" CommitChanges="true" ></px:PXGridColumn>
									<px:PXGridColumn DataField="DiscountSequenceID" Width="90px" CommitChanges="true" ></px:PXGridColumn>
									<px:PXGridColumn DataField="Type" RenderEditorText="True" Width="90px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="IsManual" Width="75px" Type="CheckBox" TextAlign="Center" ></px:PXGridColumn>
									<px:PXGridColumn DataField="CuryDiscountableAmt" TextAlign="Right" Width="90px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="DiscountableQty" TextAlign="Right" Width="90px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="CuryDiscountAmt" TextAlign="Right" Width="81px" CommitChanges="true" ></px:PXGridColumn>
									<px:PXGridColumn DataField="CuryRetainedDiscountAmt" TextAlign="Right" Width="81px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="DiscountPct" TextAlign="Right" Width="81px" CommitChanges="true" ></px:PXGridColumn>
									<px:PXGridColumn DataField="FreeItemID" DisplayFormat="&gt;CCCCC-CCCCCCCCCCCCCCC" Width="144px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="FreeItemQty" TextAlign="Right" Width="81px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="OrderType" Width="63px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="OrderNbr" Width="90px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="ExtDiscCode" Width="110px"></px:PXGridColumn>
									<px:PXGridColumn DataField="Description" Width="250px"></px:PXGridColumn>
								</Columns>
							</px:PXGridLevel>
						</Levels>
						<AutoSize Enabled="True" MinHeight="150" ></AutoSize>
					</px:PXGrid>
				</Template>
			</px:PXTabItem>

			<px:PXTabItem Text="Retainage" RepaintOnDemand="false" VisibleExp="DataControls[&quot;chkRetainageApply&quot;].Value = 1" BindingContext="form">
				<Template>
					<px:PXFormView ID="formRetainage" runat="server" Style="z-index: 100" Width="100%" DataMember="CurrentDocument" SkinID="Transparent" DataSourceID="ds" >
						<Template>
							<px:PXLayoutRule runat="server" StartColumn="True" LabelsWidth="M" ControlSize="XM" ></px:PXLayoutRule>
							<px:PXNumberEdit runat="server" ID="edDefRetainagePct" DataField="DefRetainagePct" ></px:PXNumberEdit>
							<px:PXNumberEdit runat="server" ID="edCuryOrigDocAmtWithRetainageTotal" DataField="CuryOrigDocAmtWithRetainageTotal" Enabled="false" ></px:PXNumberEdit>
							<px:PXNumberEdit runat="server" ID="edCuryRetainageTotal" DataField="CuryRetainageTotal" Enabled="false" ></px:PXNumberEdit>
							<px:PXLayoutRule runat="server" StartColumn="True" LabelsWidth="SM" ControlSize="XM" ></px:PXLayoutRule>
							<px:PXNumberEdit runat="server" ID="edCuryRetainageUnreleasedAmt" DataField="CuryRetainageUnreleasedAmt" Enabled="false" ></px:PXNumberEdit>
							<px:PXNumberEdit runat="server" ID="edCuryRetainageUnpaidTotal" DataField="CuryRetainageUnpaidTotal" Enabled="false" ></px:PXNumberEdit>
							<px:PXNumberEdit runat="server" ID="edCuryRetainagePaidTotal" DataField="CuryRetainagePaidTotal" Enabled="false" ></px:PXNumberEdit>
							<px:PXLayoutRule runat="server" StartColumn="True" LabelsWidth="SM" ControlSize="XM" ></px:PXLayoutRule>
							<px:PXNumberEdit runat="server" ID="edCuryRetainedTaxTotal" DataField="CuryRetainedTaxTotal" Enabled="false" ></px:PXNumberEdit>
							<px:PXNumberEdit runat="server" ID="edCuryRetainedDiscTotal" DataField="CuryRetainedDiscTotal" Enabled="false" ></px:PXNumberEdit>
						</Template>
					</px:PXFormView>
					<px:PXGrid ID="detgrid" runat="server" Style="z-index: 100;" Width="100%" Height="300px" SkinID="DetailsInTab" SyncPosition="true">
						<Levels>
							<px:PXGridLevel DataMember="RetainageDocuments">
								<Columns>
									<px:PXGridColumn DataField="DocType" Width="100px" Type="DropDownList" ></px:PXGridColumn>
									<px:PXGridColumn DataField="RefNbr" Width="100px" AutoCallBack="True" LinkCommand="ViewRetainageDocument" ></px:PXGridColumn>
									<px:PXGridColumn DataField="DocDate" Width="90px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="FinPeriodID" ></px:PXGridColumn>
									<px:PXGridColumn DataField="Status" ></px:PXGridColumn>
									<px:PXGridColumn DataField="CuryOrigDocAmt" TextAlign="Right" Width="100px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="CuryDocBal" TextAlign="Right" Width="100px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="ARInvoice__PaymentMethodID" ></px:PXGridColumn>
									<px:PXGridColumn DataField="ARInvoice__InvoiceNbr" Width="90px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="DocDesc" Width="250px" ></px:PXGridColumn>
								</Columns>
							</px:PXGridLevel>
						</Levels>
						<AutoSize Enabled="True" MinHeight="150" ></AutoSize>
					</px:PXGrid>
				</Template>
			</px:PXTabItem>

			<px:PXTabItem Text="Applications" RepaintOnDemand="false">
				<Template>
					<px:PXGrid ID="detgrid" runat="server" Width="100%" SkinID="DetailsInTab" Height="300px" TabIndex="700" FilesIndicator="True"
						NoteIndicator="True" SyncPosition="True">
						<Levels>
							<px:PXGridLevel DataMember="Adjustments">
								<RowTemplate>
									<px:PXLayoutRule runat="server" StartColumn="True" LabelsWidth="SM" ControlSize="XM" ></px:PXLayoutRule>
									<px:PXSelector ID="edAdjgBranchID" runat="server" DataField="AdjgBranchID" Enabled="False" ></px:PXSelector>
									<px:PXDropDown ID="edAdjgDocType" runat="server" DataField="AdjgDocType" Enabled="False" ></px:PXDropDown>
									<px:PXSelector CommitChanges="True" ID="edAdjgRefNbr" runat="server" DataField="AdjgRefNbr" Enabled="False">
										<Parameters>
											<px:PXControlParam ControlID="form" Name="ARInvoice.customerID" PropertyName="DataControls[&quot;edCustomerID&quot;].Value" ></px:PXControlParam>
											<px:PXControlParam ControlID="detgrid" Name="ARAdjust.adjgDocType" PropertyName="DataValues[&quot;AdjgDocType&quot;]" ></px:PXControlParam>
										</Parameters>
									</px:PXSelector>
									<px:PXNumberEdit CommitChanges="True" ID="edCuryAdjdAmt" runat="server" DataField="CuryAdjdAmt" ></px:PXNumberEdit>
									<px:PXDateTimeEdit ID="edARPayment__DocDate" runat="server" DataField="ARPayment__DocDate" Enabled="False" ></px:PXDateTimeEdit>
									<px:PXNumberEdit ID="edCuryDocBal" runat="server" DataField="CuryDocBal" Enabled="False" ></px:PXNumberEdit>
									<px:PXSelector ID="edARPayment__CuryID" runat="server" DataField="ARPayment__CuryID" ></px:PXSelector>
									<px:PXSelector ID="edARPayment__FinPeriodID" runat="server" DataField="ARPayment__FinPeriodID" Enabled="False" ></px:PXSelector>
									<px:PXTextEdit ID="edARPayment__ExtRefNbr" runat="server" DataField="ARPayment__ExtRefNbr" ></px:PXTextEdit>
									<px:PXDropDown ID="edARPayment__Status" runat="server" DataField="ARPayment__Status" Enabled="False" ></px:PXDropDown>
									<px:PXTextEdit ID="edARPayment__DocDesc" runat="server" DataField="ARPayment__DocDesc" ></px:PXTextEdit>
								</RowTemplate>
								<Columns>
									<px:PXGridColumn DataField="AdjgBranchID" Width="100px" RenderEditorText="True" ></px:PXGridColumn>
									<px:PXGridColumn DataField="AdjgDocType" Width="100px" RenderEditorText="True" ></px:PXGridColumn>
									<px:PXGridColumn DataField="AdjgRefNbr" Width="100px" AutoCallBack="True" LinkCommand="ViewPayment" ></px:PXGridColumn>
									<px:PXGridColumn DataField="CustomerID" TextAlign="Right" Width="100px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="CuryAdjdAmt" AutoCallBack="True" TextAlign="Right" Width="100px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="CuryAdjdPPDAmt" AutoCallBack="True" TextAlign="Right" Width="100px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="CuryAdjdWOAmt" AutoCallBack="True" TextAlign="Right" Width="100px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="WriteOffReasonCode" TextAlign="Right" Width="100px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="ARPayment__DocDate" Width="100px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="CuryDocBal" TextAlign="Right" Width="100px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="ARPayment__DocDesc" Width="250px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="ARPayment__CuryID" Width="50px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="ARPayment__FinPeriodID" ></px:PXGridColumn>
									<px:PXGridColumn DataField="ARPayment__ExtRefNbr" Width="100px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="AdjdDocType" Width="50px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="AdjdRefNbr" Width="100px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="ARPayment__Status" Label="Status" Type="DropDownList" ></px:PXGridColumn>
									<px:PXGridColumn DataField="PendingPPD" TextAlign="Center" Type="CheckBox" ></px:PXGridColumn>
									<px:PXGridColumn DataField="PPDCrMemoRefNbr" LinkCommand="ViewPPDCrMemo" Width="100px" ></px:PXGridColumn>
								</Columns>
							</px:PXGridLevel>
						</Levels>
						<AutoSize Enabled="True" MinHeight="150" ></AutoSize>
						<ActionBar DefaultAction="ViewPayment">
							<CustomItems>
								<px:PXToolBarButton Text="Auto Apply" Tooltip="Auto Apply">
									<AutoCallBack Command="AutoApply" Target="ds">
										<Behavior CommitChanges="True" ></Behavior>
									</AutoCallBack>
								</px:PXToolBarButton>
							</CustomItems>
						</ActionBar>
						<Mode AllowFormEdit="True" ></Mode>
					</px:PXGrid>
					<px:PXGrid ID="detgrid2" runat="server" Width="100%" SkinID="DetailsInTab" Height="300px" TabIndex="700" FilesIndicator="True"
						NoteIndicator="True" SyncPosition="True">
						<Levels>
							<px:PXGridLevel DataMember="Adjustments_1">
								<RowTemplate>
									<px:PXLayoutRule runat="server" StartColumn="True" LabelsWidth="SM" ControlSize="XM" ></px:PXLayoutRule>
									<px:PXDropDown ID="edAdjdDocType3" runat="server" DataField="AdjgDocType" Enabled="False" ></px:PXDropDown>
									<px:PXSelector CommitChanges="True" ID="edAdjdRefNbr3" runat="server" DataField="AdjdRefNbr" AutoRefresh="true">
										<Parameters>
											<px:PXControlParam ControlID="form" Name="ARInvoice.customerID" PropertyName="DataControls[&quot;edCustomerID&quot;].Value" ></px:PXControlParam>
											<px:PXControlParam ControlID="detgrid2" Name="ARAdjust.adjdDocType" PropertyName="DataValues[&quot;AdjdDocType&quot;]" ></px:PXControlParam>
										</Parameters>
									</px:PXSelector>
									<px:PXNumberEdit CommitChanges="True" ID="edCuryAdjgAmt3" runat="server" DataField="CuryAdjgAmt" ></px:PXNumberEdit>
									<px:PXDateTimeEdit ID="edARInvoice__DocDate3" runat="server" DataField="ARInvoice__DocDate" Enabled="False" ></px:PXDateTimeEdit>
									<px:PXNumberEdit ID="edCuryDocBal3" runat="server" DataField="CuryDocBal" Enabled="False" ></px:PXNumberEdit>
									<px:PXSelector ID="edARInvoice__CuryID3" runat="server" DataField="ARInvoice__CuryID" ></px:PXSelector>
									<px:PXSelector ID="edARInvoice__FinPeriodID3" runat="server" DataField="ARInvoice__FinPeriodID" Enabled="False" ></px:PXSelector>
									<px:PXTextEdit ID="edARInvoice__InvoiceNbr3" runat="server" DataField="ARInvoice__InvoiceNbr" ></px:PXTextEdit>
									<px:PXDropDown ID="edARInvoice__Status3" runat="server" DataField="ARInvoice__Status" Enabled="False" ></px:PXDropDown>
									<px:PXTextEdit ID="edARInvoice__DocDesc3" runat="server" DataField="ARInvoice__DocDesc" ></px:PXTextEdit>
								</RowTemplate>
								<Columns>
									<px:PXGridColumn DataField="AdjgBranchID" Width="100px" RenderEditorText="True" ></px:PXGridColumn>
									<px:PXGridColumn DataField="AdjdDocType" Width="100px" RenderEditorText="True" ></px:PXGridColumn>
									<px:PXGridColumn DataField="AdjdRefNbr" Width="100px" AutoCallBack="True" LinkCommand="ViewInvoice" ></px:PXGridColumn>
									<px:PXGridColumn DataField="AdjdCustomerID" TextAlign="Right" Width="100px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="CuryAdjgAmt" AutoCallBack="True" TextAlign="Right" Width="100px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="ARInvoice__DocDate" Width="100px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="CuryDocBal" TextAlign="Right" Width="100px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="ARInvoice__DocDesc" Width="250px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="ARInvoice__CuryID" Width="50px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="ARInvoice__FinPeriodID" ></px:PXGridColumn>
									<px:PXGridColumn DataField="ARInvoice__InvoiceNbr" Width="100px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="ARInvoice__Status" Label="Status" Type="DropDownList" ></px:PXGridColumn>
								</Columns>
							</px:PXGridLevel>
						</Levels>
						<AutoSize Enabled="True" MinHeight="150" ></AutoSize>
						<Mode AllowFormEdit="True" ></Mode>
					</px:PXGrid>
					<px:PXGrid ID="detgrid3" runat="server" Width="100%" SkinID="DetailsInTab" Height="300px" TabIndex="700" FilesIndicator="True"
						NoteIndicator="True" SyncPosition="True">
						<Levels>
							<px:PXGridLevel DataMember="Adjustments_2">
								<RowTemplate>
									<px:PXLayoutRule runat="server" StartColumn="True" LabelsWidth="SM" ControlSize="XM" ></px:PXLayoutRule>
									<px:PXDropDown ID="edAdjdDocType2" runat="server" DataField="DisplayDocType" Enabled="False" ></px:PXDropDown>
									<px:PXSelector CommitChanges="True" ID="edAdjdRefNbr2" runat="server" DataField="DisplayRefNbr" AutoRefresh="true">
										<Parameters>
											<px:PXControlParam ControlID="form" Name="ARInvoice.customerID" PropertyName="DataControls[&quot;edCustomerID&quot;].Value" ></px:PXControlParam>
											<px:PXControlParam ControlID="detgrid3" Name="ARAdjust.adjdDocType" PropertyName="DataValues[&quot;DisplayDocType&quot;]" ></px:PXControlParam>
										</Parameters>
									</px:PXSelector>
									<px:PXNumberEdit CommitChanges="True" ID="edCuryAdjgAmt2" runat="server" DataField="DisplayCuryAmt" ></px:PXNumberEdit>
									<px:PXDateTimeEdit ID="edARInvoice__DocDate" runat="server" DataField="DisplayDocDate" Enabled="False" ></px:PXDateTimeEdit>
									<px:PXNumberEdit ID="edCuryDocBal2" runat="server" DataField="CuryDocBal" Enabled="False" ></px:PXNumberEdit>
									<px:PXSelector ID="edARInvoice__CuryID" runat="server" DataField="DisplayCuryID" ></px:PXSelector>
									<px:PXSelector ID="edARInvoice__FinPeriodID" runat="server" DataField="DisplayFinPeriodID" Enabled="False" ></px:PXSelector>
									<px:PXTextEdit ID="edARInvoice__InvoiceNbr" runat="server" DataField="ARInvoice__InvoiceNbr" ></px:PXTextEdit>
									<px:PXDropDown ID="edARInvoice__Status" runat="server" DataField="DisplayStatus" Enabled="False" ></px:PXDropDown>
									<px:PXTextEdit ID="edARInvoice__DocDesc" runat="server" DataField="DisplayDocDesc" ></px:PXTextEdit>
								</RowTemplate>
								<Columns>
									<px:PXGridColumn DataField="AdjgBranchID" Width="100px" RenderEditorText="True" ></px:PXGridColumn>
									<px:PXGridColumn DataField="DisplayDocType" Width="100px" RenderEditorText="True" ></px:PXGridColumn>
									<px:PXGridColumn DataField="DisplayRefNbr" Width="100px" AutoCallBack="True" LinkCommand="ViewInvoice2" ></px:PXGridColumn>
									<px:PXGridColumn DataField="DisplayCustomerID" TextAlign="Right" Width="100px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="DisplayCuryAmt" AutoCallBack="True" TextAlign="Right" Width="100px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="DisplayDocDate" Width="100px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="CuryDocBal" TextAlign="Right" Width="100px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="DisplayDocDesc" Width="250px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="DisplayCuryID" Width="50px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="DisplayFinPeriodID" ></px:PXGridColumn>
									<px:PXGridColumn DataField="ARInvoice__InvoiceNbr" Width="100px" ></px:PXGridColumn>
									<px:PXGridColumn DataField="DisplayStatus" Label="Status" Type="DropDownList" ></px:PXGridColumn>
								</Columns>
							</px:PXGridLevel>
						</Levels>
						<AutoSize Enabled="True" MinHeight="150" ></AutoSize>
						<ActionBar DefaultAction="ViewInvoice2" ></ActionBar>
						<Mode AllowFormEdit="True" ></Mode>
					</px:PXGrid>
				</Template>
			</px:PXTabItem>
			<px:PXTabItem Text="ROT/RUT Details" VisibleExp="DataControls[&quot;chkRUTROT&quot;].Value == 1" BindingContext="form">
				<Template>
					<px:PXFormView runat="server" SkinID="Transparent" ID="RUTROTForm" DataSourceID="ds" DataMember="Rutrots" MarkRequired="Dynamic">
						<Template>
							<px:PXLayoutRule runat="server" ControlSize="M" LabelsWidth="SM" StartColumn="True" GroupCaption="RUT and ROT Settings" ></px:PXLayoutRule>
							<px:PXCheckBox runat="server" DataField="AutoDistribution" CommitChanges="True" ID="chkRRAutoDistribution" AlignLeft="true" ></px:PXCheckBox>
							<px:PXGroupBox runat="server" DataField="RUTROTType" CommitChanges="True" RenderStyle="Simple" ID="gbRRType">
								<ContentLayout Layout="Stack" Orientation="Vertical" ></ContentLayout>
								<Template>
									<px:PXRadioButton runat="server" Value="U" ID="gbRRType_opU" GroupName="gbRRType" Text="RUT" ></px:PXRadioButton>
									<px:PXRadioButton runat="server" Value="O" ID="gbRRType_opO" GroupName="gbRRType" Text="ROT" ></px:PXRadioButton>
									<px:PXTextEdit runat="server" DataField="ROTAppartment" ID="edRAppartment" ></px:PXTextEdit>
									<px:PXTextEdit runat="server" DataField="ROTEstate" ID="edRREstate" ></px:PXTextEdit>
									<px:PXTextEdit runat="server" DataField="ROTOrganizationNbr" ID="edRROrganizationNbr" CommitChanges="true" ></px:PXTextEdit>
								</Template>
							</px:PXGroupBox>
							<px:PXLayoutRule runat="server" GroupCaption="RUT and ROT Distribution" ></px:PXLayoutRule>
							<px:PXGrid runat="server" DataSourceID="ds" Width="350px" AllowFilter="false" AllowSearch="false" Height="200px" SkinID="ShortList" ID="gridDistribution"
								Caption="RUT and ROT Distribution" CaptionVisible="false">
								<Mode InitNewRow="true" ></Mode>
								<Levels>
									<px:PXGridLevel DataMember="RRDistribution">
										<RowTemplate>
											<px:PXTextEdit runat="server" DataField="PersonalID" ID="edPersonalID" ></px:PXTextEdit>
											<px:PXNumberEdit runat="server" DataField="CuryAmount" ID="edAmount" ></px:PXNumberEdit>
										</RowTemplate>
										<Columns>
											<px:PXGridColumn DataField="PersonalID" Width="160px" ></px:PXGridColumn>
											<px:PXGridColumn DataField="CuryAmount" Width="100px" TextAlign="Right" ></px:PXGridColumn>
											<px:PXGridColumn DataField="Extra" Width="60px" Type="CheckBox" ></px:PXGridColumn>
										</Columns>
									</px:PXGridLevel>
								</Levels>
								<ActionBar>
									<Actions>
										<ExportExcel Enabled="false" ></ExportExcel>
										<AddNew Enabled="true" ></AddNew>
										<Delete Enabled="true" ></Delete>
										<AdjustColumns Enabled="true" ></AdjustColumns>
									</Actions>
								</ActionBar>
							</px:PXGrid>
							<px:PXLayoutRule runat="server" ControlSize="M" LabelsWidth="SM" StartColumn="True" GroupCaption="RUT and ROT Totals" ></px:PXLayoutRule>
							<px:PXNumberEdit runat="server" DataField="DeductionPct" CommitChanges="True" ID="edRRDeduction" ></px:PXNumberEdit>
							<px:PXNumberEdit runat="server" DataField="CuryTotalAmt" ID="edRRTotalAmt" Enabled="false" ></px:PXNumberEdit>
							<px:PXNumberEdit runat="server" DataField="CuryOtherCost" ID="edRUTROTOtherCost" Enabled="false" ></px:PXNumberEdit>
							<px:PXNumberEdit runat="server" DataField="CuryMaterialCost" ID="edRUTROTMaterialCost" Enabled="false" ></px:PXNumberEdit>
							<px:PXNumberEdit runat="server" DataField="CuryWorkPrice" ID="edRUTROTWorkPrice" Enabled="false" ></px:PXNumberEdit>
							<px:PXNumberEdit runat="server" DataField="CuryDistributedAmt" ID="edRRAvailAmt" Enabled="false" ></px:PXNumberEdit>
							<px:PXNumberEdit runat="server" DataField="CuryUndistributedAmt" ID="edRRUndsitributedAmt" Enabled="false" ></px:PXNumberEdit>
							<px:PXLayoutRule runat="server" ControlSize="S" LabelsWidth="L" GroupCaption="RUT and ROT Balancing Documents" ></px:PXLayoutRule>
							<px:PXTextEdit ID="edBalancingCreditMemoRefNbr" runat="server" DataField="BalancingCreditMemoRefNbr" Enabled="False" AllowEdit="True">
								<LinkCommand Target="ds" Command="viewCreditMemo" ></LinkCommand>
							</px:PXTextEdit>
							<px:PXTextEdit ID="edBalancingDebitMemoRefNbr" runat="server" DataField="BalancingDebitMemoRefNbr" Enabled="False" AllowEdit="True">
								<LinkCommand Target="ds" Command="viewDebitMemo" ></LinkCommand>
							</px:PXTextEdit>
						</Template>
					</px:PXFormView>
				</Template>
			</px:PXTabItem>
		</Items>
		<CallbackCommands>
			<Search CommitChanges="True" PostData="Page" ></Search>
			<Refresh CommitChanges="True" PostData="Page" ></Refresh>
		</CallbackCommands>
		<AutoSize Container="Window" Enabled="True" MinHeight="180" ></AutoSize>
	</px:PXTab>
	<px:PXSmartPanel ID="spRetainageOptions" runat="server" Style="z-index: 108;" Caption="Release Retainage" CaptionVisible="True" Key="ReleaseRetainageOptions" AutoReload="true" LoadOnDemand="true">
		<px:PXFormView ID="frmRetainageOptions" runat="server" Style="z-index: 100;" DataMember="ReleaseRetainageOptions" CaptionVisible="False" SkinID="Transparent">
			<ContentStyle BorderWidth="0px">
			</ContentStyle>
			<Template>
				<px:PXLayoutRule runat="server" StartColumn="True" LabelsWidth="SM" ControlSize="S" ></px:PXLayoutRule>
				<px:PXNumberEdit CommitChanges="True" ID="edRetainagePct" runat="server" AllowNull="False" DataField="RetainagePct" ></px:PXNumberEdit>
				<px:PXNumberEdit CommitChanges="True" ID="edCuryRetainageAmt" runat="server" AllowNull="False" DataField="CuryRetainageAmt" ></px:PXNumberEdit>
				<px:PXNumberEdit CommitChanges="True" ID="edCuryRetainageUnreleasedAmt" runat="server" AllowNull="False" DataField="CuryRetainageUnreleasedAmt" ></px:PXNumberEdit>
			</Template>
		</px:PXFormView>
		<px:PXPanel ID="PXPanel9" runat="server" SkinID="Buttons">
					<px:PXButton ID="btnCancel" runat="server" DialogResult="Cancel" Text="Cancel" ></px:PXButton>
					<px:PXButton ID="btnRelease" runat="server" DialogResult="OK" Text="Release" ></px:PXButton>
				</px:PXPanel>
	</px:PXSmartPanel>
	<px:PXSmartPanel ID="panelDuplicate" runat="server" Caption="Duplicate Reference Nbr." CaptionVisible="true" LoadOnDemand="true" Key="duplicatefilter"
		AutoCallBack-Enabled="true" AutoCallBack-Command="Refresh" CallBackMode-CommitChanges="True"
		CallBackMode-PostData="Page">
		<div style="padding: 5px">
			<px:PXFormView ID="formCopyTo" runat="server" DataSourceID="ds" CaptionVisible="False" DataMember="duplicatefilter">
				<ContentStyle BackColor="Transparent" BorderStyle="None" ></ContentStyle>
				<Template>
					<px:PXLayoutRule ID="PXLayoutRule2" runat="server" StartColumn="True" LabelsWidth="SM" ControlSize="SM" ></px:PXLayoutRule>
					<px:PXLabel Size="xl" ID="lblMessage" runat="server">Record already exists. Please enter new Reference Nbr.</px:PXLabel>
					<px:PXMaskEdit CommitChanges="True" ID="edRefNbr" runat="server" DataField="RefNbr" InputMask="&gt;CCCCCCCCCCCCCCC" ></px:PXMaskEdit>
				</Template>
			</px:PXFormView>
		</div>
		<px:PXPanel ID="PXPanel7" runat="server" SkinID="Buttons">
			<px:PXButton ID="PXButton9" runat="server" DialogResult="OK" Text="OK" CommandSourceID="ds" ></px:PXButton>
			<px:PXButton ID="PXButton1" runat="server" DialogResult="Cancel" Text="Cancel" CommandSourceID="ds" ></px:PXButton>
		</px:PXPanel>
	</px:PXSmartPanel>
	<px:PXSmartPanel ID="PanelRecalcDiscounts" runat="server" Caption="Recalculate Prices" CaptionVisible="true" LoadOnDemand="true" Key="recalcdiscountsfilter"
		AutoCallBack-Enabled="true" AutoCallBack-Target="formRecalcDiscounts" AutoCallBack-Command="Refresh" CallBackMode-CommitChanges="True"
		CallBackMode-PostData="Page">
			<px:PXFormView ID="formRecalcDiscounts" runat="server" DataSourceID="ds" CaptionVisible="False" DataMember="recalcdiscountsfilter">
				<Activity Height="" HighlightColor="" SelectedColor="" Width="" ></Activity>
				<ContentStyle BackColor="Transparent" BorderStyle="None" ></ContentStyle>
				<Template>
					<px:PXLayoutRule ID="PXLayoutRule3" runat="server" StartColumn="True" LabelsWidth="S" ControlSize="SM" ></px:PXLayoutRule>
					<px:PXDropDown ID="edRecalcTerget" runat="server" DataField="RecalcTarget" CommitChanges="true" ></px:PXDropDown>
					<px:PXCheckBox CommitChanges="True" ID="chkRecalcUnitPrices" runat="server" DataField="RecalcUnitPrices" ></px:PXCheckBox>
					<px:PXCheckBox CommitChanges="True" ID="chkOverrideManualPrices" runat="server" DataField="OverrideManualPrices" Style="margin-left: 25px" ></px:PXCheckBox>
					<px:PXCheckBox CommitChanges="True" ID="chkRecalcDiscounts" runat="server" DataField="RecalcDiscounts" ></px:PXCheckBox>
					<px:PXCheckBox CommitChanges="True" ID="chkOverrideManualDiscounts" runat="server" DataField="OverrideManualDiscounts" Style="margin-left: 25px" ></px:PXCheckBox>
					<px:PXCheckBox CommitChanges="True" ID="chkOverrideManualDocGroupDiscounts" runat="server" DataField="OverrideManualDocGroupDiscounts" Style="margin-left: 25px" ></px:PXCheckBox>
				</Template>
			</px:PXFormView>
		<px:PXPanel ID="PXPanel5" runat="server" SkinID="Buttons">
			<px:PXButton ID="PXButton10" runat="server" DialogResult="OK" Text="OK" CommandName="RecalcOk" CommandSourceID="ds" ></px:PXButton>
		</px:PXPanel>
	</px:PXSmartPanel>
	<px:PXSmartPanel runat="server" ID="CstSmartPanel1" Height="125" Width="600px" Key="CustomerCredits" LoadOnDemand="True" AutoRepaint="True">
		<px:PXFormView runat="server" ID="CstFormView2" DataMember="CustomerCredits" DataSourceID="ds" Height="125" Width="500px" SkinID="Transparent">
			<Template>
                <%--<px:PXLayoutRule ID="PXLayoutRule30" runat="server" StartColumn="True" LabelsWidth="S" ControlSize="SM" ></px:PXLayoutRule>--%>
				<px:PXLabel runat="server" ID="CstLabel3" Text="Due to the freemium version you have to use credits. If you don't have enough credits, please watch videos to earn new credits:" Height="40px" />
				<px:PXNumberEdit runat="server" ID="CstPXNumberEdit8" DataField="Credits" />
               <%-- <px:PXLayoutRule ID="PXLayoutRule31" runat="server" Merge="true" ></px:PXLayoutRule>--%>
                <px:PXButton runat="server" ID="CstButton5" DialogResult="OK" Text="Use Credits" Target="ds">
				<AutoCallBack Target="ds" Command="UseCredits" /></px:PXButton>
			<px:PXButton runat="server" ID="CstButton7" DialogResult="OK" Text="Process Without Credits">
				<PopupCommand Target="ds" Command="NormalProcess" />
				<AutoCallBack Command="NormalProcess" Target="ds" /></px:PXButton>
            <%--<div>--%>
                <button name="ctl00$phG$CstSmartPanel1$CstFormView2$CstButton4" type="button" 
				id="ctl00_phG_CstSmartPanel1_CstFormView2_CstButton4" 
				class="Button" onclick="showLayer();">Watch Video</button>
            <%--</div>--%>
			<px:PXButton runat="server" ID="CstButton6" DialogResult="Cancel" Text="Close">              
			</px:PXButton>

			</Template></px:PXFormView>
		<%--<px:PXPanel runat="server" ID="CstPanel4" SkinID="Buttons" Height="50" Width="550px">
			</px:PXPanel>--%></px:PXSmartPanel></asp:Content>
