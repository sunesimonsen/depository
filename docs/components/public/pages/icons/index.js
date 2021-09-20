import { html } from "@depository/view";
import {
  Title,
  SubTitle,
  Line,
  Heading,
  Example,
} from "@depository/styleguide";
import { css } from "stylewars";
import { Anchor } from "@depository/components";
import IconUsage from "./IconUsage.js";
import IconColors from "./IconColors.js";

import Grip12Icon from "@depository/components/icons/Grip12Icon";
import Paperclip12Icon from "@depository/components/icons/Paperclip12Icon";
import I123Fill12Icon from "@depository/components/icons/I123Fill12Icon";
import AdjustFill12Icon from "@depository/components/icons/AdjustFill12Icon";
import AlertErrorFill12Icon from "@depository/components/icons/AlertErrorFill12Icon";
import AlertWarningFill12Icon from "@depository/components/icons/AlertWarningFill12Icon";
import AlignCenterFill12Icon from "@depository/components/icons/AlignCenterFill12Icon";
import AlignJustifyFill12Icon from "@depository/components/icons/AlignJustifyFill12Icon";
import AlignLeftFill12Icon from "@depository/components/icons/AlignLeftFill12Icon";
import AlignRightFill12Icon from "@depository/components/icons/AlignRightFill12Icon";
import AltTextFill12Icon from "@depository/components/icons/AltTextFill12Icon";
import ArrowLeftFill12Icon from "@depository/components/icons/ArrowLeftFill12Icon";
import ArrowLeftUpFill12Icon from "@depository/components/icons/ArrowLeftUpFill12Icon";
import ArrowRetweetFill12Icon from "@depository/components/icons/ArrowRetweetFill12Icon";
import ArrowReverseFill12Icon from "@depository/components/icons/ArrowReverseFill12Icon";
import ArrowTrendingFill12Icon from "@depository/components/icons/ArrowTrendingFill12Icon";
import AsteriskFill12Icon from "@depository/components/icons/AsteriskFill12Icon";
import AtFill12Icon from "@depository/components/icons/AtFill12Icon";
import BarChartFill12Icon from "@depository/components/icons/BarChartFill12Icon";
import BasketballFill12Icon from "@depository/components/icons/BasketballFill12Icon";
import BoldFill12Icon from "@depository/components/icons/BoldFill12Icon";
import BookClosedFill12Icon from "@depository/components/icons/BookClosedFill12Icon";
import BookOpenFill12Icon from "@depository/components/icons/BookOpenFill12Icon";
import Box3dFill12Icon from "@depository/components/icons/Box3dFill12Icon";
import BuildingFill12Icon from "@depository/components/icons/BuildingFill12Icon";
import CalendarFill12Icon from "@depository/components/icons/CalendarFill12Icon";
import CarFill12Icon from "@depository/components/icons/CarFill12Icon";
import CenterFill12Icon from "@depository/components/icons/CenterFill12Icon";
import CheckBadgeFill12Icon from "@depository/components/icons/CheckBadgeFill12Icon";
import CheckBoxDoubleFill12Icon from "@depository/components/icons/CheckBoxDoubleFill12Icon";
import CheckBoxFill12Icon from "@depository/components/icons/CheckBoxFill12Icon";
import CheckCircleFill12Icon from "@depository/components/icons/CheckCircleFill12Icon";
import CheckDoubleFill12Icon from "@depository/components/icons/CheckDoubleFill12Icon";
import CheckLgFill12Icon from "@depository/components/icons/CheckLgFill12Icon";
import CheckSmFill12Icon from "@depository/components/icons/CheckSmFill12Icon";
import ChevronBoxFill12Icon from "@depository/components/icons/ChevronBoxFill12Icon";
import ChevronDoubleDownFill12Icon from "@depository/components/icons/ChevronDoubleDownFill12Icon";
import ChevronDoubleLeftFill12Icon from "@depository/components/icons/ChevronDoubleLeftFill12Icon";
import ChevronDoubleRightFill12Icon from "@depository/components/icons/ChevronDoubleRightFill12Icon";
import ChevronDoubleUpFill12Icon from "@depository/components/icons/ChevronDoubleUpFill12Icon";
import ChevronDownFill12Icon from "@depository/components/icons/ChevronDownFill12Icon";
import ChevronLeftFill12Icon from "@depository/components/icons/ChevronLeftFill12Icon";
import ChevronRightFill12Icon from "@depository/components/icons/ChevronRightFill12Icon";
import ChevronUpFill12Icon from "@depository/components/icons/ChevronUpFill12Icon";
import CircleFill12Icon from "@depository/components/icons/CircleFill12Icon";
import CircleFullFill12Icon from "@depository/components/icons/CircleFullFill12Icon";
import CircleLineFill12Icon from "@depository/components/icons/CircleLineFill12Icon";
import CircleSmFill12Icon from "@depository/components/icons/CircleSmFill12Icon";
import ClipboardBlankFill12Icon from "@depository/components/icons/ClipboardBlankFill12Icon";
import ClipboardCheckFill12Icon from "@depository/components/icons/ClipboardCheckFill12Icon";
import ClipboardListFill12Icon from "@depository/components/icons/ClipboardListFill12Icon";
import ClockCycleFill12Icon from "@depository/components/icons/ClockCycleFill12Icon";
import ClockFill12Icon from "@depository/components/icons/ClockFill12Icon";
import ClockInFill12Icon from "@depository/components/icons/ClockInFill12Icon";
import ClockOutFill12Icon from "@depository/components/icons/ClockOutFill12Icon";
import CopyFill12Icon from "@depository/components/icons/CopyFill12Icon";
import CreditCardFill12Icon from "@depository/components/icons/CreditCardFill12Icon";
import CssFill12Icon from "@depository/components/icons/CssFill12Icon";
import CursorArrowFill12Icon from "@depository/components/icons/CursorArrowFill12Icon";
import CutleryFill12Icon from "@depository/components/icons/CutleryFill12Icon";
import DashFill12Icon from "@depository/components/icons/DashFill12Icon";
import DatabaseFill12Icon from "@depository/components/icons/DatabaseFill12Icon";
import DecimalFill12Icon from "@depository/components/icons/DecimalFill12Icon";
import DirectionLtrFill12Icon from "@depository/components/icons/DirectionLtrFill12Icon";
import DirectionRtlFill12Icon from "@depository/components/icons/DirectionRtlFill12Icon";
import DownloadFill12Icon from "@depository/components/icons/DownloadFill12Icon";
import DuplicateFill12Icon from "@depository/components/icons/DuplicateFill12Icon";
import EditRedoFill12Icon from "@depository/components/icons/EditRedoFill12Icon";
import EditUndoFill12Icon from "@depository/components/icons/EditUndoFill12Icon";
import EmailFill12Icon from "@depository/components/icons/EmailFill12Icon";
import EraserFill12Icon from "@depository/components/icons/EraserFill12Icon";
import ExitFill12Icon from "@depository/components/icons/ExitFill12Icon";
import EyeFill12Icon from "@depository/components/icons/EyeFill12Icon";
import FacebookFill12Icon from "@depository/components/icons/FacebookFill12Icon";
import FileDocumentFill12Icon from "@depository/components/icons/FileDocumentFill12Icon";
import FileErrorFill12Icon from "@depository/components/icons/FileErrorFill12Icon";
import FileGenericFill12Icon from "@depository/components/icons/FileGenericFill12Icon";
import FileImageFill12Icon from "@depository/components/icons/FileImageFill12Icon";
import FilePdfFill12Icon from "@depository/components/icons/FilePdfFill12Icon";
import FilePresentationFill12Icon from "@depository/components/icons/FilePresentationFill12Icon";
import FileSpreadsheetFill12Icon from "@depository/components/icons/FileSpreadsheetFill12Icon";
import FileZipFill12Icon from "@depository/components/icons/FileZipFill12Icon";
import FilterFill12Icon from "@depository/components/icons/FilterFill12Icon";
import FlagFill12Icon from "@depository/components/icons/FlagFill12Icon";
import FolderClosedFill12Icon from "@depository/components/icons/FolderClosedFill12Icon";
import FolderOpenFill12Icon from "@depository/components/icons/FolderOpenFill12Icon";
import FullWidthFill12Icon from "@depository/components/icons/FullWidthFill12Icon";
import GearFill12Icon from "@depository/components/icons/GearFill12Icon";
import GithubFill12Icon from "@depository/components/icons/GithubFill12Icon";
import GlobeFill12Icon from "@depository/components/icons/GlobeFill12Icon";
import Grid2x2Fill12Icon from "@depository/components/icons/Grid2x2Fill12Icon";
import Grid3x3Fill12Icon from "@depository/components/icons/Grid3x3Fill12Icon";
import HeadingFill12Icon from "@depository/components/icons/HeadingFill12Icon";
import HeartFill12Icon from "@depository/components/icons/HeartFill12Icon";
import HistoryFill12Icon from "@depository/components/icons/HistoryFill12Icon";
import HomeFill12Icon from "@depository/components/icons/HomeFill12Icon";
import HorizontalRuleFill12Icon from "@depository/components/icons/HorizontalRuleFill12Icon";
import ImageFill12Icon from "@depository/components/icons/ImageFill12Icon";
import InboxFill12Icon from "@depository/components/icons/InboxFill12Icon";
import IndentDecreaseFill12Icon from "@depository/components/icons/IndentDecreaseFill12Icon";
import IndentIncreaseFill12Icon from "@depository/components/icons/IndentIncreaseFill12Icon";
import InfoFill12Icon from "@depository/components/icons/InfoFill12Icon";
import InterlockingRingsFill12Icon from "@depository/components/icons/InterlockingRingsFill12Icon";
import ItalicFill12Icon from "@depository/components/icons/ItalicFill12Icon";
import LeafFill12Icon from "@depository/components/icons/LeafFill12Icon";
import LifesaverFill12Icon from "@depository/components/icons/LifesaverFill12Icon";
import LightbulbFill12Icon from "@depository/components/icons/LightbulbFill12Icon";
import LightningBoltFill12Icon from "@depository/components/icons/LightningBoltFill12Icon";
import LineGraphFill12Icon from "@depository/components/icons/LineGraphFill12Icon";
import LineSocialFill12Icon from "@depository/components/icons/LineSocialFill12Icon";
import LinkFill12Icon from "@depository/components/icons/LinkFill12Icon";
import LinkRemoveFill12Icon from "@depository/components/icons/LinkRemoveFill12Icon";
import LinkedinFill12Icon from "@depository/components/icons/LinkedinFill12Icon";
import ListBulletFill12Icon from "@depository/components/icons/ListBulletFill12Icon";
import ListNumberFill12Icon from "@depository/components/icons/ListNumberFill12Icon";
import ListNumberRtlFill12Icon from "@depository/components/icons/ListNumberRtlFill12Icon";
import LocationFill12Icon from "@depository/components/icons/LocationFill12Icon";
import LockLockedFill12Icon from "@depository/components/icons/LockLockedFill12Icon";
import LockUnlockedFill12Icon from "@depository/components/icons/LockUnlockedFill12Icon";
import MarkupFill12Icon from "@depository/components/icons/MarkupFill12Icon";
import MaximizeFill12Icon from "@depository/components/icons/MaximizeFill12Icon";
import MegaphoneFill12Icon from "@depository/components/icons/MegaphoneFill12Icon";
import MenuFill12Icon from "@depository/components/icons/MenuFill12Icon";
import MessengerFill12Icon from "@depository/components/icons/MessengerFill12Icon";
import MicrophoneOffFill12Icon from "@depository/components/icons/MicrophoneOffFill12Icon";
import MicrophoneOnFill12Icon from "@depository/components/icons/MicrophoneOnFill12Icon";
import MinimizeFill12Icon from "@depository/components/icons/MinimizeFill12Icon";
import MobilePhoneFill12Icon from "@depository/components/icons/MobilePhoneFill12Icon";
import MonitorFill12Icon from "@depository/components/icons/MonitorFill12Icon";
import MultilineFill12Icon from "@depository/components/icons/MultilineFill12Icon";
import NewWindowFill12Icon from "@depository/components/icons/NewWindowFill12Icon";
import NotesFill12Icon from "@depository/components/icons/NotesFill12Icon";
import NotificationFill12Icon from "@depository/components/icons/NotificationFill12Icon";
import NumberFill12Icon from "@depository/components/icons/NumberFill12Icon";
import OriginalSizeFill12Icon from "@depository/components/icons/OriginalSizeFill12Icon";
import OverflowFill12Icon from "@depository/components/icons/OverflowFill12Icon";
import OverflowVerticalFill12Icon from "@depository/components/icons/OverflowVerticalFill12Icon";
import PaletteFill12Icon from "@depository/components/icons/PaletteFill12Icon";
import PanelsFill12Icon from "@depository/components/icons/PanelsFill12Icon";
import PauseFill12Icon from "@depository/components/icons/PauseFill12Icon";
import PencilFill12Icon from "@depository/components/icons/PencilFill12Icon";
import PhoneCallEndFill12Icon from "@depository/components/icons/PhoneCallEndFill12Icon";
import PhoneCallInFill12Icon from "@depository/components/icons/PhoneCallInFill12Icon";
import PhoneCallOutFill12Icon from "@depository/components/icons/PhoneCallOutFill12Icon";
import PhoneCallPauseFill12Icon from "@depository/components/icons/PhoneCallPauseFill12Icon";
import PhoneCallSpeakerFill12Icon from "@depository/components/icons/PhoneCallSpeakerFill12Icon";
import PhoneCallTransferFill12Icon from "@depository/components/icons/PhoneCallTransferFill12Icon";
import PhoneFill12Icon from "@depository/components/icons/PhoneFill12Icon";
import PlayCircleFill12Icon from "@depository/components/icons/PlayCircleFill12Icon";
import PlayFill12Icon from "@depository/components/icons/PlayFill12Icon";
import PlugFill12Icon from "@depository/components/icons/PlugFill12Icon";
import PlusCircleFill12Icon from "@depository/components/icons/PlusCircleFill12Icon";
import PlusFill12Icon from "@depository/components/icons/PlusFill12Icon";
import PuzzlePieceFill12Icon from "@depository/components/icons/PuzzlePieceFill12Icon";
import QuestionMarkFill12Icon from "@depository/components/icons/QuestionMarkFill12Icon";
import QuoteFill12Icon from "@depository/components/icons/QuoteFill12Icon";
import RearrangeFill12Icon from "@depository/components/icons/RearrangeFill12Icon";
import RecordFill12Icon from "@depository/components/icons/RecordFill12Icon";
import ReloadFill12Icon from "@depository/components/icons/ReloadFill12Icon";
import SearchFill12Icon from "@depository/components/icons/SearchFill12Icon";
import ShapesFill12Icon from "@depository/components/icons/ShapesFill12Icon";
import ShareFill12Icon from "@depository/components/icons/ShareFill12Icon";
import ShieldFill12Icon from "@depository/components/icons/ShieldFill12Icon";
import ShoppingCartFill12Icon from "@depository/components/icons/ShoppingCartFill12Icon";
import SignpostFill12Icon from "@depository/components/icons/SignpostFill12Icon";
import SlackFill12Icon from "@depository/components/icons/SlackFill12Icon";
import SmileSlightFill12Icon from "@depository/components/icons/SmileSlightFill12Icon";
import SmileyFill12Icon from "@depository/components/icons/SmileyFill12Icon";
import SortFill12Icon from "@depository/components/icons/SortFill12Icon";
import SpeechBubbleConversationFill12Icon from "@depository/components/icons/SpeechBubbleConversationFill12Icon";
import SpeechBubbleLightningBoltFill12Icon from "@depository/components/icons/SpeechBubbleLightningBoltFill12Icon";
import SpeechBubblePlainFill12Icon from "@depository/components/icons/SpeechBubblePlainFill12Icon";
import StarFill12Icon from "@depository/components/icons/StarFill12Icon";
import TableFill12Icon from "@depository/components/icons/TableFill12Icon";
import TagFill12Icon from "@depository/components/icons/TagFill12Icon";
import TerminalCliFill12Icon from "@depository/components/icons/TerminalCliFill12Icon";
import TerminalWindowFill12Icon from "@depository/components/icons/TerminalWindowFill12Icon";
import TextColorFill12Icon from "@depository/components/icons/TextColorFill12Icon";
import TextFill12Icon from "@depository/components/icons/TextFill12Icon";
import ThumbsDownFill12Icon from "@depository/components/icons/ThumbsDownFill12Icon";
import ThumbsUpFill12Icon from "@depository/components/icons/ThumbsUpFill12Icon";
import TranslationCreatedFill12Icon from "@depository/components/icons/TranslationCreatedFill12Icon";
import TranslationDeletedFill12Icon from "@depository/components/icons/TranslationDeletedFill12Icon";
import TranslationExistsFill12Icon from "@depository/components/icons/TranslationExistsFill12Icon";
import TranslationOutdatedFill12Icon from "@depository/components/icons/TranslationOutdatedFill12Icon";
import TranslationUpdatedFill12Icon from "@depository/components/icons/TranslationUpdatedFill12Icon";
import TrashFill12Icon from "@depository/components/icons/TrashFill12Icon";
import TwitterFill12Icon from "@depository/components/icons/TwitterFill12Icon";
import UnderlineFill12Icon from "@depository/components/icons/UnderlineFill12Icon";
import UploadFill12Icon from "@depository/components/icons/UploadFill12Icon";
import UserCircleFill12Icon from "@depository/components/icons/UserCircleFill12Icon";
import UserFollowFill12Icon from "@depository/components/icons/UserFollowFill12Icon";
import UserGroupFill12Icon from "@depository/components/icons/UserGroupFill12Icon";
import UserListFill12Icon from "@depository/components/icons/UserListFill12Icon";
import UserSoloFill12Icon from "@depository/components/icons/UserSoloFill12Icon";
import UserUnfollowFill12Icon from "@depository/components/icons/UserUnfollowFill12Icon";
import VoicemailFill12Icon from "@depository/components/icons/VoicemailFill12Icon";
import VolumeMutedFill12Icon from "@depository/components/icons/VolumeMutedFill12Icon";
import VolumeUnmutedFill12Icon from "@depository/components/icons/VolumeUnmutedFill12Icon";
import WechatFill12Icon from "@depository/components/icons/WechatFill12Icon";
import WhatsappFill12Icon from "@depository/components/icons/WhatsappFill12Icon";
import WrapLeftFill12Icon from "@depository/components/icons/WrapLeftFill12Icon";
import WrapRightFill12Icon from "@depository/components/icons/WrapRightFill12Icon";
import XCircleFill12Icon from "@depository/components/icons/XCircleFill12Icon";
import XFill12Icon from "@depository/components/icons/XFill12Icon";
import ZendeskFill12Icon from "@depository/components/icons/ZendeskFill12Icon";
import I123Stroke12Icon from "@depository/components/icons/I123Stroke12Icon";
import AdjustStroke12Icon from "@depository/components/icons/AdjustStroke12Icon";
import AlertErrorStroke12Icon from "@depository/components/icons/AlertErrorStroke12Icon";
import AlertWarningStroke12Icon from "@depository/components/icons/AlertWarningStroke12Icon";
import AlignCenterStroke12Icon from "@depository/components/icons/AlignCenterStroke12Icon";
import AlignJustifyStroke12Icon from "@depository/components/icons/AlignJustifyStroke12Icon";
import AlignLeftStroke12Icon from "@depository/components/icons/AlignLeftStroke12Icon";
import AlignRightStroke12Icon from "@depository/components/icons/AlignRightStroke12Icon";
import AltTextStroke12Icon from "@depository/components/icons/AltTextStroke12Icon";
import ArrowLeftStroke12Icon from "@depository/components/icons/ArrowLeftStroke12Icon";
import ArrowLeftUpStroke12Icon from "@depository/components/icons/ArrowLeftUpStroke12Icon";
import ArrowRetweetStroke12Icon from "@depository/components/icons/ArrowRetweetStroke12Icon";
import ArrowReverseStroke12Icon from "@depository/components/icons/ArrowReverseStroke12Icon";
import ArrowTrendingStroke12Icon from "@depository/components/icons/ArrowTrendingStroke12Icon";
import AsteriskStroke12Icon from "@depository/components/icons/AsteriskStroke12Icon";
import AtStroke12Icon from "@depository/components/icons/AtStroke12Icon";
import BarChartStroke12Icon from "@depository/components/icons/BarChartStroke12Icon";
import BasketballStroke12Icon from "@depository/components/icons/BasketballStroke12Icon";
import BoldStroke12Icon from "@depository/components/icons/BoldStroke12Icon";
import BookClosedStroke12Icon from "@depository/components/icons/BookClosedStroke12Icon";
import BookOpenStroke12Icon from "@depository/components/icons/BookOpenStroke12Icon";
import Box3dStroke12Icon from "@depository/components/icons/Box3dStroke12Icon";
import BuildingStroke12Icon from "@depository/components/icons/BuildingStroke12Icon";
import CalendarStroke12Icon from "@depository/components/icons/CalendarStroke12Icon";
import CarStroke12Icon from "@depository/components/icons/CarStroke12Icon";
import CenterStroke12Icon from "@depository/components/icons/CenterStroke12Icon";
import CheckBadgeStroke12Icon from "@depository/components/icons/CheckBadgeStroke12Icon";
import CheckBoxDoubleStroke12Icon from "@depository/components/icons/CheckBoxDoubleStroke12Icon";
import CheckBoxStroke12Icon from "@depository/components/icons/CheckBoxStroke12Icon";
import CheckCircleStroke12Icon from "@depository/components/icons/CheckCircleStroke12Icon";
import CheckDoubleStroke12Icon from "@depository/components/icons/CheckDoubleStroke12Icon";
import CheckLgStroke12Icon from "@depository/components/icons/CheckLgStroke12Icon";
import CheckSmStroke12Icon from "@depository/components/icons/CheckSmStroke12Icon";
import ChevronBoxStroke12Icon from "@depository/components/icons/ChevronBoxStroke12Icon";
import ChevronDoubleDownStroke12Icon from "@depository/components/icons/ChevronDoubleDownStroke12Icon";
import ChevronDoubleLeftStroke12Icon from "@depository/components/icons/ChevronDoubleLeftStroke12Icon";
import ChevronDoubleRightStroke12Icon from "@depository/components/icons/ChevronDoubleRightStroke12Icon";
import ChevronDoubleUpStroke12Icon from "@depository/components/icons/ChevronDoubleUpStroke12Icon";
import ChevronDownStroke12Icon from "@depository/components/icons/ChevronDownStroke12Icon";
import ChevronLeftStroke12Icon from "@depository/components/icons/ChevronLeftStroke12Icon";
import ChevronRightStroke12Icon from "@depository/components/icons/ChevronRightStroke12Icon";
import ChevronUpStroke12Icon from "@depository/components/icons/ChevronUpStroke12Icon";
import CircleFullStroke12Icon from "@depository/components/icons/CircleFullStroke12Icon";
import CircleLineStroke12Icon from "@depository/components/icons/CircleLineStroke12Icon";
import CircleSmStroke12Icon from "@depository/components/icons/CircleSmStroke12Icon";
import CircleStroke12Icon from "@depository/components/icons/CircleStroke12Icon";
import ClipboardBlankStroke12Icon from "@depository/components/icons/ClipboardBlankStroke12Icon";
import ClipboardCheckStroke12Icon from "@depository/components/icons/ClipboardCheckStroke12Icon";
import ClipboardListStroke12Icon from "@depository/components/icons/ClipboardListStroke12Icon";
import ClockCycleStroke12Icon from "@depository/components/icons/ClockCycleStroke12Icon";
import ClockInStroke12Icon from "@depository/components/icons/ClockInStroke12Icon";
import ClockOutStroke12Icon from "@depository/components/icons/ClockOutStroke12Icon";
import ClockStroke12Icon from "@depository/components/icons/ClockStroke12Icon";
import CopyStroke12Icon from "@depository/components/icons/CopyStroke12Icon";
import CreditCardStroke12Icon from "@depository/components/icons/CreditCardStroke12Icon";
import CssStroke12Icon from "@depository/components/icons/CssStroke12Icon";
import CursorArrowStroke12Icon from "@depository/components/icons/CursorArrowStroke12Icon";
import CutleryStroke12Icon from "@depository/components/icons/CutleryStroke12Icon";
import DashStroke12Icon from "@depository/components/icons/DashStroke12Icon";
import DatabaseStroke12Icon from "@depository/components/icons/DatabaseStroke12Icon";
import DecimalStroke12Icon from "@depository/components/icons/DecimalStroke12Icon";
import DirectionLtrStroke12Icon from "@depository/components/icons/DirectionLtrStroke12Icon";
import DirectionRtlStroke12Icon from "@depository/components/icons/DirectionRtlStroke12Icon";
import DownloadStroke12Icon from "@depository/components/icons/DownloadStroke12Icon";
import DuplicateStroke12Icon from "@depository/components/icons/DuplicateStroke12Icon";
import EditRedoStroke12Icon from "@depository/components/icons/EditRedoStroke12Icon";
import EditUndoStroke12Icon from "@depository/components/icons/EditUndoStroke12Icon";
import EmailStroke12Icon from "@depository/components/icons/EmailStroke12Icon";
import EraserStroke12Icon from "@depository/components/icons/EraserStroke12Icon";
import ExitStroke12Icon from "@depository/components/icons/ExitStroke12Icon";
import EyeStroke12Icon from "@depository/components/icons/EyeStroke12Icon";
import FacebookStroke12Icon from "@depository/components/icons/FacebookStroke12Icon";
import FileDocumentStroke12Icon from "@depository/components/icons/FileDocumentStroke12Icon";
import FileErrorStroke12Icon from "@depository/components/icons/FileErrorStroke12Icon";
import FileGenericStroke12Icon from "@depository/components/icons/FileGenericStroke12Icon";
import FileImageStroke12Icon from "@depository/components/icons/FileImageStroke12Icon";
import FilePdfStroke12Icon from "@depository/components/icons/FilePdfStroke12Icon";
import FilePresentationStroke12Icon from "@depository/components/icons/FilePresentationStroke12Icon";
import FileSpreadsheetStroke12Icon from "@depository/components/icons/FileSpreadsheetStroke12Icon";
import FileZipStroke12Icon from "@depository/components/icons/FileZipStroke12Icon";
import FilterStroke12Icon from "@depository/components/icons/FilterStroke12Icon";
import FlagStroke12Icon from "@depository/components/icons/FlagStroke12Icon";
import FolderClosedStroke12Icon from "@depository/components/icons/FolderClosedStroke12Icon";
import FolderOpenStroke12Icon from "@depository/components/icons/FolderOpenStroke12Icon";
import FullWidthStroke12Icon from "@depository/components/icons/FullWidthStroke12Icon";
import GearStroke12Icon from "@depository/components/icons/GearStroke12Icon";
import GithubStroke12Icon from "@depository/components/icons/GithubStroke12Icon";
import GlobeStroke12Icon from "@depository/components/icons/GlobeStroke12Icon";
import Grid2x2Stroke12Icon from "@depository/components/icons/Grid2x2Stroke12Icon";
import Grid3x3Stroke12Icon from "@depository/components/icons/Grid3x3Stroke12Icon";
import HeadingStroke12Icon from "@depository/components/icons/HeadingStroke12Icon";
import HeartStroke12Icon from "@depository/components/icons/HeartStroke12Icon";
import HistoryStroke12Icon from "@depository/components/icons/HistoryStroke12Icon";
import HomeStroke12Icon from "@depository/components/icons/HomeStroke12Icon";
import HorizontalRuleStroke12Icon from "@depository/components/icons/HorizontalRuleStroke12Icon";
import ImageStroke12Icon from "@depository/components/icons/ImageStroke12Icon";
import InboxStroke12Icon from "@depository/components/icons/InboxStroke12Icon";
import IndentDecreaseStroke12Icon from "@depository/components/icons/IndentDecreaseStroke12Icon";
import IndentIncreaseStroke12Icon from "@depository/components/icons/IndentIncreaseStroke12Icon";
import InfoStroke12Icon from "@depository/components/icons/InfoStroke12Icon";
import InterlockingRingsStroke12Icon from "@depository/components/icons/InterlockingRingsStroke12Icon";
import ItalicStroke12Icon from "@depository/components/icons/ItalicStroke12Icon";
import LeafStroke12Icon from "@depository/components/icons/LeafStroke12Icon";
import LifesaverStroke12Icon from "@depository/components/icons/LifesaverStroke12Icon";
import LightbulbStroke12Icon from "@depository/components/icons/LightbulbStroke12Icon";
import LightningBoltStroke12Icon from "@depository/components/icons/LightningBoltStroke12Icon";
import LineGraphStroke12Icon from "@depository/components/icons/LineGraphStroke12Icon";
import LineSocialStroke12Icon from "@depository/components/icons/LineSocialStroke12Icon";
import LinkRemoveStroke12Icon from "@depository/components/icons/LinkRemoveStroke12Icon";
import LinkStroke12Icon from "@depository/components/icons/LinkStroke12Icon";
import LinkedinStroke12Icon from "@depository/components/icons/LinkedinStroke12Icon";
import ListBulletStroke12Icon from "@depository/components/icons/ListBulletStroke12Icon";
import ListNumberRtlStroke12Icon from "@depository/components/icons/ListNumberRtlStroke12Icon";
import ListNumberStroke12Icon from "@depository/components/icons/ListNumberStroke12Icon";
import LocationStroke12Icon from "@depository/components/icons/LocationStroke12Icon";
import LockLockedStroke12Icon from "@depository/components/icons/LockLockedStroke12Icon";
import LockUnlockedStroke12Icon from "@depository/components/icons/LockUnlockedStroke12Icon";
import MarkupStroke12Icon from "@depository/components/icons/MarkupStroke12Icon";
import MaximizeStroke12Icon from "@depository/components/icons/MaximizeStroke12Icon";
import MegaphoneStroke12Icon from "@depository/components/icons/MegaphoneStroke12Icon";
import MenuStroke12Icon from "@depository/components/icons/MenuStroke12Icon";
import MessengerStroke12Icon from "@depository/components/icons/MessengerStroke12Icon";
import MicrophoneOffStroke12Icon from "@depository/components/icons/MicrophoneOffStroke12Icon";
import MicrophoneOnStroke12Icon from "@depository/components/icons/MicrophoneOnStroke12Icon";
import MinimizeStroke12Icon from "@depository/components/icons/MinimizeStroke12Icon";
import MobilePhoneStroke12Icon from "@depository/components/icons/MobilePhoneStroke12Icon";
import MonitorStroke12Icon from "@depository/components/icons/MonitorStroke12Icon";
import MultilineStroke12Icon from "@depository/components/icons/MultilineStroke12Icon";
import NewWindowStroke12Icon from "@depository/components/icons/NewWindowStroke12Icon";
import NotesStroke12Icon from "@depository/components/icons/NotesStroke12Icon";
import NotificationStroke12Icon from "@depository/components/icons/NotificationStroke12Icon";
import NumberStroke12Icon from "@depository/components/icons/NumberStroke12Icon";
import OriginalSizeStroke12Icon from "@depository/components/icons/OriginalSizeStroke12Icon";
import OverflowStroke12Icon from "@depository/components/icons/OverflowStroke12Icon";
import OverflowVerticalStroke12Icon from "@depository/components/icons/OverflowVerticalStroke12Icon";
import PaletteStroke12Icon from "@depository/components/icons/PaletteStroke12Icon";
import PanelsStroke12Icon from "@depository/components/icons/PanelsStroke12Icon";
import PauseStroke12Icon from "@depository/components/icons/PauseStroke12Icon";
import PencilStroke12Icon from "@depository/components/icons/PencilStroke12Icon";
import PhoneCallEndStroke12Icon from "@depository/components/icons/PhoneCallEndStroke12Icon";
import PhoneCallInStroke12Icon from "@depository/components/icons/PhoneCallInStroke12Icon";
import PhoneCallOutStroke12Icon from "@depository/components/icons/PhoneCallOutStroke12Icon";
import PhoneCallPauseStroke12Icon from "@depository/components/icons/PhoneCallPauseStroke12Icon";
import PhoneCallSpeakerStroke12Icon from "@depository/components/icons/PhoneCallSpeakerStroke12Icon";
import PhoneCallTransferStroke12Icon from "@depository/components/icons/PhoneCallTransferStroke12Icon";
import PhoneStroke12Icon from "@depository/components/icons/PhoneStroke12Icon";
import PlayCircleStroke12Icon from "@depository/components/icons/PlayCircleStroke12Icon";
import PlayStroke12Icon from "@depository/components/icons/PlayStroke12Icon";
import PlugStroke12Icon from "@depository/components/icons/PlugStroke12Icon";
import PlusCircleStroke12Icon from "@depository/components/icons/PlusCircleStroke12Icon";
import PlusStroke12Icon from "@depository/components/icons/PlusStroke12Icon";
import PuzzlePieceStroke12Icon from "@depository/components/icons/PuzzlePieceStroke12Icon";
import QuestionMarkStroke12Icon from "@depository/components/icons/QuestionMarkStroke12Icon";
import QuoteStroke12Icon from "@depository/components/icons/QuoteStroke12Icon";
import RearrangeStroke12Icon from "@depository/components/icons/RearrangeStroke12Icon";
import RecordStroke12Icon from "@depository/components/icons/RecordStroke12Icon";
import ReloadStroke12Icon from "@depository/components/icons/ReloadStroke12Icon";
import SearchStroke12Icon from "@depository/components/icons/SearchStroke12Icon";
import ShapesStroke12Icon from "@depository/components/icons/ShapesStroke12Icon";
import ShareStroke12Icon from "@depository/components/icons/ShareStroke12Icon";
import ShieldStroke12Icon from "@depository/components/icons/ShieldStroke12Icon";
import ShoppingCartStroke12Icon from "@depository/components/icons/ShoppingCartStroke12Icon";
import SignpostStroke12Icon from "@depository/components/icons/SignpostStroke12Icon";
import SlackStroke12Icon from "@depository/components/icons/SlackStroke12Icon";
import SmileSlightStroke12Icon from "@depository/components/icons/SmileSlightStroke12Icon";
import SmileyStroke12Icon from "@depository/components/icons/SmileyStroke12Icon";
import SortStroke12Icon from "@depository/components/icons/SortStroke12Icon";
import SpeechBubbleConversationStroke12Icon from "@depository/components/icons/SpeechBubbleConversationStroke12Icon";
import SpeechBubbleLightningBoltStroke12Icon from "@depository/components/icons/SpeechBubbleLightningBoltStroke12Icon";
import SpeechBubblePlainStroke12Icon from "@depository/components/icons/SpeechBubblePlainStroke12Icon";
import StarStroke12Icon from "@depository/components/icons/StarStroke12Icon";
import TableStroke12Icon from "@depository/components/icons/TableStroke12Icon";
import TagStroke12Icon from "@depository/components/icons/TagStroke12Icon";
import TerminalCliStroke12Icon from "@depository/components/icons/TerminalCliStroke12Icon";
import TerminalWindowStroke12Icon from "@depository/components/icons/TerminalWindowStroke12Icon";
import TextColorStroke12Icon from "@depository/components/icons/TextColorStroke12Icon";
import TextStroke12Icon from "@depository/components/icons/TextStroke12Icon";
import ThumbsDownStroke12Icon from "@depository/components/icons/ThumbsDownStroke12Icon";
import ThumbsUpStroke12Icon from "@depository/components/icons/ThumbsUpStroke12Icon";
import TranslationCreatedStroke12Icon from "@depository/components/icons/TranslationCreatedStroke12Icon";
import TranslationDeletedStroke12Icon from "@depository/components/icons/TranslationDeletedStroke12Icon";
import TranslationExistsStroke12Icon from "@depository/components/icons/TranslationExistsStroke12Icon";
import TranslationOutdatedStroke12Icon from "@depository/components/icons/TranslationOutdatedStroke12Icon";
import TranslationUpdatedStroke12Icon from "@depository/components/icons/TranslationUpdatedStroke12Icon";
import TrashStroke12Icon from "@depository/components/icons/TrashStroke12Icon";
import TwitterStroke12Icon from "@depository/components/icons/TwitterStroke12Icon";
import UnderlineStroke12Icon from "@depository/components/icons/UnderlineStroke12Icon";
import UploadStroke12Icon from "@depository/components/icons/UploadStroke12Icon";
import UserCircleStroke12Icon from "@depository/components/icons/UserCircleStroke12Icon";
import UserFollowStroke12Icon from "@depository/components/icons/UserFollowStroke12Icon";
import UserGroupStroke12Icon from "@depository/components/icons/UserGroupStroke12Icon";
import UserListStroke12Icon from "@depository/components/icons/UserListStroke12Icon";
import UserSoloStroke12Icon from "@depository/components/icons/UserSoloStroke12Icon";
import UserUnfollowStroke12Icon from "@depository/components/icons/UserUnfollowStroke12Icon";
import VoicemailStroke12Icon from "@depository/components/icons/VoicemailStroke12Icon";
import VolumeMutedStroke12Icon from "@depository/components/icons/VolumeMutedStroke12Icon";
import VolumeUnmutedStroke12Icon from "@depository/components/icons/VolumeUnmutedStroke12Icon";
import WechatStroke12Icon from "@depository/components/icons/WechatStroke12Icon";
import WhatsappStroke12Icon from "@depository/components/icons/WhatsappStroke12Icon";
import WrapLeftStroke12Icon from "@depository/components/icons/WrapLeftStroke12Icon";
import WrapRightStroke12Icon from "@depository/components/icons/WrapRightStroke12Icon";
import XCircleStroke12Icon from "@depository/components/icons/XCircleStroke12Icon";
import XStroke12Icon from "@depository/components/icons/XStroke12Icon";
import ZendeskStroke12Icon from "@depository/components/icons/ZendeskStroke12Icon";
import Grip16Icon from "@depository/components/icons/Grip16Icon";
import Paperclip16Icon from "@depository/components/icons/Paperclip16Icon";
import I123Fill16Icon from "@depository/components/icons/I123Fill16Icon";
import AdjustFill16Icon from "@depository/components/icons/AdjustFill16Icon";
import AlertErrorFill16Icon from "@depository/components/icons/AlertErrorFill16Icon";
import AlertWarningFill16Icon from "@depository/components/icons/AlertWarningFill16Icon";
import AlignCenterFill16Icon from "@depository/components/icons/AlignCenterFill16Icon";
import AlignJustifyFill16Icon from "@depository/components/icons/AlignJustifyFill16Icon";
import AlignLeftFill16Icon from "@depository/components/icons/AlignLeftFill16Icon";
import AlignRightFill16Icon from "@depository/components/icons/AlignRightFill16Icon";
import AltTextFill16Icon from "@depository/components/icons/AltTextFill16Icon";
import ArrowLeftFill16Icon from "@depository/components/icons/ArrowLeftFill16Icon";
import ArrowLeftUpFill16Icon from "@depository/components/icons/ArrowLeftUpFill16Icon";
import ArrowRetweetFill16Icon from "@depository/components/icons/ArrowRetweetFill16Icon";
import ArrowReverseFill16Icon from "@depository/components/icons/ArrowReverseFill16Icon";
import ArrowTrendingFill16Icon from "@depository/components/icons/ArrowTrendingFill16Icon";
import AsteriskFill16Icon from "@depository/components/icons/AsteriskFill16Icon";
import AtFill16Icon from "@depository/components/icons/AtFill16Icon";
import BarChartFill16Icon from "@depository/components/icons/BarChartFill16Icon";
import BasketballFill16Icon from "@depository/components/icons/BasketballFill16Icon";
import BoldFill16Icon from "@depository/components/icons/BoldFill16Icon";
import BookClosedFill16Icon from "@depository/components/icons/BookClosedFill16Icon";
import BookOpenFill16Icon from "@depository/components/icons/BookOpenFill16Icon";
import Box3dFill16Icon from "@depository/components/icons/Box3dFill16Icon";
import BuildingFill16Icon from "@depository/components/icons/BuildingFill16Icon";
import CalendarFill16Icon from "@depository/components/icons/CalendarFill16Icon";
import CarFill16Icon from "@depository/components/icons/CarFill16Icon";
import CenterFill16Icon from "@depository/components/icons/CenterFill16Icon";
import CheckBadgeFill16Icon from "@depository/components/icons/CheckBadgeFill16Icon";
import CheckBoxDoubleFill16Icon from "@depository/components/icons/CheckBoxDoubleFill16Icon";
import CheckBoxFill16Icon from "@depository/components/icons/CheckBoxFill16Icon";
import CheckCircleFill16Icon from "@depository/components/icons/CheckCircleFill16Icon";
import CheckDoubleFill16Icon from "@depository/components/icons/CheckDoubleFill16Icon";
import CheckLgFill16Icon from "@depository/components/icons/CheckLgFill16Icon";
import CheckSmFill16Icon from "@depository/components/icons/CheckSmFill16Icon";
import ChevronBoxFill16Icon from "@depository/components/icons/ChevronBoxFill16Icon";
import ChevronDoubleDownFill16Icon from "@depository/components/icons/ChevronDoubleDownFill16Icon";
import ChevronDoubleLeftFill16Icon from "@depository/components/icons/ChevronDoubleLeftFill16Icon";
import ChevronDoubleRightFill16Icon from "@depository/components/icons/ChevronDoubleRightFill16Icon";
import ChevronDoubleUpFill16Icon from "@depository/components/icons/ChevronDoubleUpFill16Icon";
import ChevronDownFill16Icon from "@depository/components/icons/ChevronDownFill16Icon";
import ChevronLeftFill16Icon from "@depository/components/icons/ChevronLeftFill16Icon";
import ChevronRightFill16Icon from "@depository/components/icons/ChevronRightFill16Icon";
import ChevronUpFill16Icon from "@depository/components/icons/ChevronUpFill16Icon";
import CircleFill16Icon from "@depository/components/icons/CircleFill16Icon";
import CircleFullFill16Icon from "@depository/components/icons/CircleFullFill16Icon";
import CircleLineFill16Icon from "@depository/components/icons/CircleLineFill16Icon";
import CircleSmFill16Icon from "@depository/components/icons/CircleSmFill16Icon";
import ClipboardBlankFill16Icon from "@depository/components/icons/ClipboardBlankFill16Icon";
import ClipboardCheckFill16Icon from "@depository/components/icons/ClipboardCheckFill16Icon";
import ClipboardListFill16Icon from "@depository/components/icons/ClipboardListFill16Icon";
import ClockCycleFill16Icon from "@depository/components/icons/ClockCycleFill16Icon";
import ClockFill16Icon from "@depository/components/icons/ClockFill16Icon";
import ClockInFill16Icon from "@depository/components/icons/ClockInFill16Icon";
import ClockOutFill16Icon from "@depository/components/icons/ClockOutFill16Icon";
import CopyFill16Icon from "@depository/components/icons/CopyFill16Icon";
import CreditCardFill16Icon from "@depository/components/icons/CreditCardFill16Icon";
import CssFill16Icon from "@depository/components/icons/CssFill16Icon";
import CursorArrowFill16Icon from "@depository/components/icons/CursorArrowFill16Icon";
import CutleryFill16Icon from "@depository/components/icons/CutleryFill16Icon";
import DashFill16Icon from "@depository/components/icons/DashFill16Icon";
import DatabaseFill16Icon from "@depository/components/icons/DatabaseFill16Icon";
import DecimalFill16Icon from "@depository/components/icons/DecimalFill16Icon";
import DirectionLtrFill16Icon from "@depository/components/icons/DirectionLtrFill16Icon";
import DirectionRtlFill16Icon from "@depository/components/icons/DirectionRtlFill16Icon";
import DownloadFill16Icon from "@depository/components/icons/DownloadFill16Icon";
import DuplicateFill16Icon from "@depository/components/icons/DuplicateFill16Icon";
import EditRedoFill16Icon from "@depository/components/icons/EditRedoFill16Icon";
import EditUndoFill16Icon from "@depository/components/icons/EditUndoFill16Icon";
import EmailFill16Icon from "@depository/components/icons/EmailFill16Icon";
import EraserFill16Icon from "@depository/components/icons/EraserFill16Icon";
import ExitFill16Icon from "@depository/components/icons/ExitFill16Icon";
import EyeFill16Icon from "@depository/components/icons/EyeFill16Icon";
import FacebookFill16Icon from "@depository/components/icons/FacebookFill16Icon";
import FileDocumentFill16Icon from "@depository/components/icons/FileDocumentFill16Icon";
import FileErrorFill16Icon from "@depository/components/icons/FileErrorFill16Icon";
import FileGenericFill16Icon from "@depository/components/icons/FileGenericFill16Icon";
import FileImageFill16Icon from "@depository/components/icons/FileImageFill16Icon";
import FilePdfFill16Icon from "@depository/components/icons/FilePdfFill16Icon";
import FilePresentationFill16Icon from "@depository/components/icons/FilePresentationFill16Icon";
import FileSpreadsheetFill16Icon from "@depository/components/icons/FileSpreadsheetFill16Icon";
import FileZipFill16Icon from "@depository/components/icons/FileZipFill16Icon";
import FilterFill16Icon from "@depository/components/icons/FilterFill16Icon";
import FlagFill16Icon from "@depository/components/icons/FlagFill16Icon";
import FolderClosedFill16Icon from "@depository/components/icons/FolderClosedFill16Icon";
import FolderOpenFill16Icon from "@depository/components/icons/FolderOpenFill16Icon";
import FullWidthFill16Icon from "@depository/components/icons/FullWidthFill16Icon";
import GearFill16Icon from "@depository/components/icons/GearFill16Icon";
import GithubFill16Icon from "@depository/components/icons/GithubFill16Icon";
import GlobeFill16Icon from "@depository/components/icons/GlobeFill16Icon";
import Grid2x2Fill16Icon from "@depository/components/icons/Grid2x2Fill16Icon";
import Grid3x3Fill16Icon from "@depository/components/icons/Grid3x3Fill16Icon";
import HeadingFill16Icon from "@depository/components/icons/HeadingFill16Icon";
import HeartFill16Icon from "@depository/components/icons/HeartFill16Icon";
import HistoryFill16Icon from "@depository/components/icons/HistoryFill16Icon";
import HomeFill16Icon from "@depository/components/icons/HomeFill16Icon";
import HorizontalRuleFill16Icon from "@depository/components/icons/HorizontalRuleFill16Icon";
import ImageFill16Icon from "@depository/components/icons/ImageFill16Icon";
import InboxFill16Icon from "@depository/components/icons/InboxFill16Icon";
import IndentDecreaseFill16Icon from "@depository/components/icons/IndentDecreaseFill16Icon";
import IndentIncreaseFill16Icon from "@depository/components/icons/IndentIncreaseFill16Icon";
import InfoFill16Icon from "@depository/components/icons/InfoFill16Icon";
import InterlockingRingsFill16Icon from "@depository/components/icons/InterlockingRingsFill16Icon";
import ItalicFill16Icon from "@depository/components/icons/ItalicFill16Icon";
import LeafFill16Icon from "@depository/components/icons/LeafFill16Icon";
import LifesaverFill16Icon from "@depository/components/icons/LifesaverFill16Icon";
import LightbulbFill16Icon from "@depository/components/icons/LightbulbFill16Icon";
import LightningBoltFill16Icon from "@depository/components/icons/LightningBoltFill16Icon";
import LineGraphFill16Icon from "@depository/components/icons/LineGraphFill16Icon";
import LineSocialFill16Icon from "@depository/components/icons/LineSocialFill16Icon";
import LinkFill16Icon from "@depository/components/icons/LinkFill16Icon";
import LinkRemoveFill16Icon from "@depository/components/icons/LinkRemoveFill16Icon";
import LinkedinFill16Icon from "@depository/components/icons/LinkedinFill16Icon";
import ListBulletFill16Icon from "@depository/components/icons/ListBulletFill16Icon";
import ListNumberFill16Icon from "@depository/components/icons/ListNumberFill16Icon";
import ListNumberRtlFill16Icon from "@depository/components/icons/ListNumberRtlFill16Icon";
import LocationFill16Icon from "@depository/components/icons/LocationFill16Icon";
import LockLockedFill16Icon from "@depository/components/icons/LockLockedFill16Icon";
import LockUnlockedFill16Icon from "@depository/components/icons/LockUnlockedFill16Icon";
import MarkupFill16Icon from "@depository/components/icons/MarkupFill16Icon";
import MaximizeFill16Icon from "@depository/components/icons/MaximizeFill16Icon";
import MegaphoneFill16Icon from "@depository/components/icons/MegaphoneFill16Icon";
import MenuFill16Icon from "@depository/components/icons/MenuFill16Icon";
import MessengerFill16Icon from "@depository/components/icons/MessengerFill16Icon";
import MicrophoneOffFill16Icon from "@depository/components/icons/MicrophoneOffFill16Icon";
import MicrophoneOnFill16Icon from "@depository/components/icons/MicrophoneOnFill16Icon";
import MinimizeFill16Icon from "@depository/components/icons/MinimizeFill16Icon";
import MobilePhoneFill16Icon from "@depository/components/icons/MobilePhoneFill16Icon";
import MonitorFill16Icon from "@depository/components/icons/MonitorFill16Icon";
import MultilineFill16Icon from "@depository/components/icons/MultilineFill16Icon";
import NewWindowFill16Icon from "@depository/components/icons/NewWindowFill16Icon";
import NotesFill16Icon from "@depository/components/icons/NotesFill16Icon";
import NotificationFill16Icon from "@depository/components/icons/NotificationFill16Icon";
import NumberFill16Icon from "@depository/components/icons/NumberFill16Icon";
import OriginalSizeFill16Icon from "@depository/components/icons/OriginalSizeFill16Icon";
import OverflowFill16Icon from "@depository/components/icons/OverflowFill16Icon";
import OverflowVerticalFill16Icon from "@depository/components/icons/OverflowVerticalFill16Icon";
import PaletteFill16Icon from "@depository/components/icons/PaletteFill16Icon";
import PanelsFill16Icon from "@depository/components/icons/PanelsFill16Icon";
import PauseFill16Icon from "@depository/components/icons/PauseFill16Icon";
import PencilFill16Icon from "@depository/components/icons/PencilFill16Icon";
import PhoneCallEndFill16Icon from "@depository/components/icons/PhoneCallEndFill16Icon";
import PhoneCallInFill16Icon from "@depository/components/icons/PhoneCallInFill16Icon";
import PhoneCallOutFill16Icon from "@depository/components/icons/PhoneCallOutFill16Icon";
import PhoneCallPauseFill16Icon from "@depository/components/icons/PhoneCallPauseFill16Icon";
import PhoneCallSpeakerFill16Icon from "@depository/components/icons/PhoneCallSpeakerFill16Icon";
import PhoneCallTransferFill16Icon from "@depository/components/icons/PhoneCallTransferFill16Icon";
import PhoneFill16Icon from "@depository/components/icons/PhoneFill16Icon";
import PlayCircleFill16Icon from "@depository/components/icons/PlayCircleFill16Icon";
import PlayFill16Icon from "@depository/components/icons/PlayFill16Icon";
import PlugFill16Icon from "@depository/components/icons/PlugFill16Icon";
import PlusCircleFill16Icon from "@depository/components/icons/PlusCircleFill16Icon";
import PlusFill16Icon from "@depository/components/icons/PlusFill16Icon";
import PuzzlePieceFill16Icon from "@depository/components/icons/PuzzlePieceFill16Icon";
import QuestionMarkFill16Icon from "@depository/components/icons/QuestionMarkFill16Icon";
import QuoteFill16Icon from "@depository/components/icons/QuoteFill16Icon";
import RearrangeFill16Icon from "@depository/components/icons/RearrangeFill16Icon";
import RecordFill16Icon from "@depository/components/icons/RecordFill16Icon";
import ReloadFill16Icon from "@depository/components/icons/ReloadFill16Icon";
import SearchFill16Icon from "@depository/components/icons/SearchFill16Icon";
import ShapesFill16Icon from "@depository/components/icons/ShapesFill16Icon";
import ShareFill16Icon from "@depository/components/icons/ShareFill16Icon";
import ShieldFill16Icon from "@depository/components/icons/ShieldFill16Icon";
import ShoppingCartFill16Icon from "@depository/components/icons/ShoppingCartFill16Icon";
import SignpostFill16Icon from "@depository/components/icons/SignpostFill16Icon";
import SlackFill16Icon from "@depository/components/icons/SlackFill16Icon";
import SmileSlightFill16Icon from "@depository/components/icons/SmileSlightFill16Icon";
import SmileyFill16Icon from "@depository/components/icons/SmileyFill16Icon";
import SortFill16Icon from "@depository/components/icons/SortFill16Icon";
import SpeechBubbleConversationFill16Icon from "@depository/components/icons/SpeechBubbleConversationFill16Icon";
import SpeechBubbleLightningBoltFill16Icon from "@depository/components/icons/SpeechBubbleLightningBoltFill16Icon";
import SpeechBubblePlainFill16Icon from "@depository/components/icons/SpeechBubblePlainFill16Icon";
import StarFill16Icon from "@depository/components/icons/StarFill16Icon";
import TableFill16Icon from "@depository/components/icons/TableFill16Icon";
import TagFill16Icon from "@depository/components/icons/TagFill16Icon";
import TerminalCliFill16Icon from "@depository/components/icons/TerminalCliFill16Icon";
import TerminalWindowFill16Icon from "@depository/components/icons/TerminalWindowFill16Icon";
import TextColorFill16Icon from "@depository/components/icons/TextColorFill16Icon";
import TextFill16Icon from "@depository/components/icons/TextFill16Icon";
import ThumbsDownFill16Icon from "@depository/components/icons/ThumbsDownFill16Icon";
import ThumbsUpFill16Icon from "@depository/components/icons/ThumbsUpFill16Icon";
import TranslationCreatedFill16Icon from "@depository/components/icons/TranslationCreatedFill16Icon";
import TranslationDeletedFill16Icon from "@depository/components/icons/TranslationDeletedFill16Icon";
import TranslationExistsFill16Icon from "@depository/components/icons/TranslationExistsFill16Icon";
import TranslationOutdatedFill16Icon from "@depository/components/icons/TranslationOutdatedFill16Icon";
import TranslationUpdatedFill16Icon from "@depository/components/icons/TranslationUpdatedFill16Icon";
import TrashFill16Icon from "@depository/components/icons/TrashFill16Icon";
import TwitterFill16Icon from "@depository/components/icons/TwitterFill16Icon";
import UnderlineFill16Icon from "@depository/components/icons/UnderlineFill16Icon";
import UploadFill16Icon from "@depository/components/icons/UploadFill16Icon";
import UserCircleFill16Icon from "@depository/components/icons/UserCircleFill16Icon";
import UserFollowFill16Icon from "@depository/components/icons/UserFollowFill16Icon";
import UserGroupFill16Icon from "@depository/components/icons/UserGroupFill16Icon";
import UserListFill16Icon from "@depository/components/icons/UserListFill16Icon";
import UserSoloFill16Icon from "@depository/components/icons/UserSoloFill16Icon";
import UserUnfollowFill16Icon from "@depository/components/icons/UserUnfollowFill16Icon";
import VoicemailFill16Icon from "@depository/components/icons/VoicemailFill16Icon";
import VolumeMutedFill16Icon from "@depository/components/icons/VolumeMutedFill16Icon";
import VolumeUnmutedFill16Icon from "@depository/components/icons/VolumeUnmutedFill16Icon";
import WechatFill16Icon from "@depository/components/icons/WechatFill16Icon";
import WhatsappFill16Icon from "@depository/components/icons/WhatsappFill16Icon";
import WrapLeftFill16Icon from "@depository/components/icons/WrapLeftFill16Icon";
import WrapRightFill16Icon from "@depository/components/icons/WrapRightFill16Icon";
import XCircleFill16Icon from "@depository/components/icons/XCircleFill16Icon";
import XFill16Icon from "@depository/components/icons/XFill16Icon";
import ZendeskFill16Icon from "@depository/components/icons/ZendeskFill16Icon";
import I123Stroke16Icon from "@depository/components/icons/I123Stroke16Icon";
import AdjustStroke16Icon from "@depository/components/icons/AdjustStroke16Icon";
import AlertErrorStroke16Icon from "@depository/components/icons/AlertErrorStroke16Icon";
import AlertWarningStroke16Icon from "@depository/components/icons/AlertWarningStroke16Icon";
import AlignCenterStroke16Icon from "@depository/components/icons/AlignCenterStroke16Icon";
import AlignJustifyStroke16Icon from "@depository/components/icons/AlignJustifyStroke16Icon";
import AlignLeftStroke16Icon from "@depository/components/icons/AlignLeftStroke16Icon";
import AlignRightStroke16Icon from "@depository/components/icons/AlignRightStroke16Icon";
import AltTextStroke16Icon from "@depository/components/icons/AltTextStroke16Icon";
import ArrowLeftStroke16Icon from "@depository/components/icons/ArrowLeftStroke16Icon";
import ArrowLeftUpStroke16Icon from "@depository/components/icons/ArrowLeftUpStroke16Icon";
import ArrowRetweetStroke16Icon from "@depository/components/icons/ArrowRetweetStroke16Icon";
import ArrowReverseStroke16Icon from "@depository/components/icons/ArrowReverseStroke16Icon";
import ArrowTrendingStroke16Icon from "@depository/components/icons/ArrowTrendingStroke16Icon";
import AsteriskStroke16Icon from "@depository/components/icons/AsteriskStroke16Icon";
import AtStroke16Icon from "@depository/components/icons/AtStroke16Icon";
import BarChartStroke16Icon from "@depository/components/icons/BarChartStroke16Icon";
import BasketballStroke16Icon from "@depository/components/icons/BasketballStroke16Icon";
import BoldStroke16Icon from "@depository/components/icons/BoldStroke16Icon";
import BookClosedStroke16Icon from "@depository/components/icons/BookClosedStroke16Icon";
import BookOpenStroke16Icon from "@depository/components/icons/BookOpenStroke16Icon";
import Box3dStroke16Icon from "@depository/components/icons/Box3dStroke16Icon";
import BuildingStroke16Icon from "@depository/components/icons/BuildingStroke16Icon";
import CalendarStroke16Icon from "@depository/components/icons/CalendarStroke16Icon";
import CarStroke16Icon from "@depository/components/icons/CarStroke16Icon";
import CenterStroke16Icon from "@depository/components/icons/CenterStroke16Icon";
import CheckBadgeStroke16Icon from "@depository/components/icons/CheckBadgeStroke16Icon";
import CheckBoxDoubleStroke16Icon from "@depository/components/icons/CheckBoxDoubleStroke16Icon";
import CheckBoxStroke16Icon from "@depository/components/icons/CheckBoxStroke16Icon";
import CheckCircleStroke16Icon from "@depository/components/icons/CheckCircleStroke16Icon";
import CheckDoubleStroke16Icon from "@depository/components/icons/CheckDoubleStroke16Icon";
import CheckLgStroke16Icon from "@depository/components/icons/CheckLgStroke16Icon";
import CheckSmStroke16Icon from "@depository/components/icons/CheckSmStroke16Icon";
import ChevronBoxStroke16Icon from "@depository/components/icons/ChevronBoxStroke16Icon";
import ChevronDoubleDownStroke16Icon from "@depository/components/icons/ChevronDoubleDownStroke16Icon";
import ChevronDoubleLeftStroke16Icon from "@depository/components/icons/ChevronDoubleLeftStroke16Icon";
import ChevronDoubleRightStroke16Icon from "@depository/components/icons/ChevronDoubleRightStroke16Icon";
import ChevronDoubleUpStroke16Icon from "@depository/components/icons/ChevronDoubleUpStroke16Icon";
import ChevronDownStroke16Icon from "@depository/components/icons/ChevronDownStroke16Icon";
import ChevronLeftStroke16Icon from "@depository/components/icons/ChevronLeftStroke16Icon";
import ChevronRightStroke16Icon from "@depository/components/icons/ChevronRightStroke16Icon";
import ChevronUpStroke16Icon from "@depository/components/icons/ChevronUpStroke16Icon";
import CircleFullStroke16Icon from "@depository/components/icons/CircleFullStroke16Icon";
import CircleLineStroke16Icon from "@depository/components/icons/CircleLineStroke16Icon";
import CircleSmStroke16Icon from "@depository/components/icons/CircleSmStroke16Icon";
import CircleStroke16Icon from "@depository/components/icons/CircleStroke16Icon";
import ClipboardBlankStroke16Icon from "@depository/components/icons/ClipboardBlankStroke16Icon";
import ClipboardCheckStroke16Icon from "@depository/components/icons/ClipboardCheckStroke16Icon";
import ClipboardListStroke16Icon from "@depository/components/icons/ClipboardListStroke16Icon";
import ClockCycleStroke16Icon from "@depository/components/icons/ClockCycleStroke16Icon";
import ClockInStroke16Icon from "@depository/components/icons/ClockInStroke16Icon";
import ClockOutStroke16Icon from "@depository/components/icons/ClockOutStroke16Icon";
import ClockStroke16Icon from "@depository/components/icons/ClockStroke16Icon";
import CopyStroke16Icon from "@depository/components/icons/CopyStroke16Icon";
import CreditCardStroke16Icon from "@depository/components/icons/CreditCardStroke16Icon";
import CssStroke16Icon from "@depository/components/icons/CssStroke16Icon";
import CursorArrowStroke16Icon from "@depository/components/icons/CursorArrowStroke16Icon";
import CutleryStroke16Icon from "@depository/components/icons/CutleryStroke16Icon";
import DashStroke16Icon from "@depository/components/icons/DashStroke16Icon";
import DatabaseStroke16Icon from "@depository/components/icons/DatabaseStroke16Icon";
import DecimalStroke16Icon from "@depository/components/icons/DecimalStroke16Icon";
import DirectionLtrStroke16Icon from "@depository/components/icons/DirectionLtrStroke16Icon";
import DirectionRtlStroke16Icon from "@depository/components/icons/DirectionRtlStroke16Icon";
import DownloadStroke16Icon from "@depository/components/icons/DownloadStroke16Icon";
import DuplicateStroke16Icon from "@depository/components/icons/DuplicateStroke16Icon";
import EditRedoStroke16Icon from "@depository/components/icons/EditRedoStroke16Icon";
import EditUndoStroke16Icon from "@depository/components/icons/EditUndoStroke16Icon";
import EmailStroke16Icon from "@depository/components/icons/EmailStroke16Icon";
import EraserStroke16Icon from "@depository/components/icons/EraserStroke16Icon";
import ExitStroke16Icon from "@depository/components/icons/ExitStroke16Icon";
import EyeStroke16Icon from "@depository/components/icons/EyeStroke16Icon";
import FacebookStroke16Icon from "@depository/components/icons/FacebookStroke16Icon";
import FileDocumentStroke16Icon from "@depository/components/icons/FileDocumentStroke16Icon";
import FileErrorStroke16Icon from "@depository/components/icons/FileErrorStroke16Icon";
import FileGenericStroke16Icon from "@depository/components/icons/FileGenericStroke16Icon";
import FileImageStroke16Icon from "@depository/components/icons/FileImageStroke16Icon";
import FilePdfStroke16Icon from "@depository/components/icons/FilePdfStroke16Icon";
import FilePresentationStroke16Icon from "@depository/components/icons/FilePresentationStroke16Icon";
import FileSpreadsheetStroke16Icon from "@depository/components/icons/FileSpreadsheetStroke16Icon";
import FileZipStroke16Icon from "@depository/components/icons/FileZipStroke16Icon";
import FilterStroke16Icon from "@depository/components/icons/FilterStroke16Icon";
import FlagStroke16Icon from "@depository/components/icons/FlagStroke16Icon";
import FolderClosedStroke16Icon from "@depository/components/icons/FolderClosedStroke16Icon";
import FolderOpenStroke16Icon from "@depository/components/icons/FolderOpenStroke16Icon";
import FullWidthStroke16Icon from "@depository/components/icons/FullWidthStroke16Icon";
import GearStroke16Icon from "@depository/components/icons/GearStroke16Icon";
import GithubStroke16Icon from "@depository/components/icons/GithubStroke16Icon";
import GlobeStroke16Icon from "@depository/components/icons/GlobeStroke16Icon";
import Grid2x2Stroke16Icon from "@depository/components/icons/Grid2x2Stroke16Icon";
import Grid3x3Stroke16Icon from "@depository/components/icons/Grid3x3Stroke16Icon";
import HeadingStroke16Icon from "@depository/components/icons/HeadingStroke16Icon";
import HeartStroke16Icon from "@depository/components/icons/HeartStroke16Icon";
import HistoryStroke16Icon from "@depository/components/icons/HistoryStroke16Icon";
import HomeStroke16Icon from "@depository/components/icons/HomeStroke16Icon";
import HorizontalRuleStroke16Icon from "@depository/components/icons/HorizontalRuleStroke16Icon";
import ImageStroke16Icon from "@depository/components/icons/ImageStroke16Icon";
import InboxStroke16Icon from "@depository/components/icons/InboxStroke16Icon";
import IndentDecreaseStroke16Icon from "@depository/components/icons/IndentDecreaseStroke16Icon";
import IndentIncreaseStroke16Icon from "@depository/components/icons/IndentIncreaseStroke16Icon";
import InfoStroke16Icon from "@depository/components/icons/InfoStroke16Icon";
import InterlockingRingsStroke16Icon from "@depository/components/icons/InterlockingRingsStroke16Icon";
import ItalicStroke16Icon from "@depository/components/icons/ItalicStroke16Icon";
import LeafStroke16Icon from "@depository/components/icons/LeafStroke16Icon";
import LifesaverStroke16Icon from "@depository/components/icons/LifesaverStroke16Icon";
import LightbulbStroke16Icon from "@depository/components/icons/LightbulbStroke16Icon";
import LightningBoltStroke16Icon from "@depository/components/icons/LightningBoltStroke16Icon";
import LineGraphStroke16Icon from "@depository/components/icons/LineGraphStroke16Icon";
import LineSocialStroke16Icon from "@depository/components/icons/LineSocialStroke16Icon";
import LinkRemoveStroke16Icon from "@depository/components/icons/LinkRemoveStroke16Icon";
import LinkStroke16Icon from "@depository/components/icons/LinkStroke16Icon";
import LinkedinStroke16Icon from "@depository/components/icons/LinkedinStroke16Icon";
import ListBulletStroke16Icon from "@depository/components/icons/ListBulletStroke16Icon";
import ListNumberRtlStroke16Icon from "@depository/components/icons/ListNumberRtlStroke16Icon";
import ListNumberStroke16Icon from "@depository/components/icons/ListNumberStroke16Icon";
import LocationStroke16Icon from "@depository/components/icons/LocationStroke16Icon";
import LockLockedStroke16Icon from "@depository/components/icons/LockLockedStroke16Icon";
import LockUnlockedStroke16Icon from "@depository/components/icons/LockUnlockedStroke16Icon";
import MarkupStroke16Icon from "@depository/components/icons/MarkupStroke16Icon";
import MaximizeStroke16Icon from "@depository/components/icons/MaximizeStroke16Icon";
import MegaphoneStroke16Icon from "@depository/components/icons/MegaphoneStroke16Icon";
import MenuStroke16Icon from "@depository/components/icons/MenuStroke16Icon";
import MessengerStroke16Icon from "@depository/components/icons/MessengerStroke16Icon";
import MicrophoneOffStroke16Icon from "@depository/components/icons/MicrophoneOffStroke16Icon";
import MicrophoneOnStroke16Icon from "@depository/components/icons/MicrophoneOnStroke16Icon";
import MinimizeStroke16Icon from "@depository/components/icons/MinimizeStroke16Icon";
import MobilePhoneStroke16Icon from "@depository/components/icons/MobilePhoneStroke16Icon";
import MonitorStroke16Icon from "@depository/components/icons/MonitorStroke16Icon";
import MultilineStroke16Icon from "@depository/components/icons/MultilineStroke16Icon";
import NewWindowStroke16Icon from "@depository/components/icons/NewWindowStroke16Icon";
import NotesStroke16Icon from "@depository/components/icons/NotesStroke16Icon";
import NotificationStroke16Icon from "@depository/components/icons/NotificationStroke16Icon";
import NumberStroke16Icon from "@depository/components/icons/NumberStroke16Icon";
import OriginalSizeStroke16Icon from "@depository/components/icons/OriginalSizeStroke16Icon";
import OverflowStroke16Icon from "@depository/components/icons/OverflowStroke16Icon";
import OverflowVerticalStroke16Icon from "@depository/components/icons/OverflowVerticalStroke16Icon";
import PaletteStroke16Icon from "@depository/components/icons/PaletteStroke16Icon";
import PanelsStroke16Icon from "@depository/components/icons/PanelsStroke16Icon";
import PauseStroke16Icon from "@depository/components/icons/PauseStroke16Icon";
import PencilStroke16Icon from "@depository/components/icons/PencilStroke16Icon";
import PhoneCallEndStroke16Icon from "@depository/components/icons/PhoneCallEndStroke16Icon";
import PhoneCallInStroke16Icon from "@depository/components/icons/PhoneCallInStroke16Icon";
import PhoneCallOutStroke16Icon from "@depository/components/icons/PhoneCallOutStroke16Icon";
import PhoneCallPauseStroke16Icon from "@depository/components/icons/PhoneCallPauseStroke16Icon";
import PhoneCallSpeakerStroke16Icon from "@depository/components/icons/PhoneCallSpeakerStroke16Icon";
import PhoneCallTransferStroke16Icon from "@depository/components/icons/PhoneCallTransferStroke16Icon";
import PhoneStroke16Icon from "@depository/components/icons/PhoneStroke16Icon";
import PlayCircleStroke16Icon from "@depository/components/icons/PlayCircleStroke16Icon";
import PlayStroke16Icon from "@depository/components/icons/PlayStroke16Icon";
import PlugStroke16Icon from "@depository/components/icons/PlugStroke16Icon";
import PlusCircleStroke16Icon from "@depository/components/icons/PlusCircleStroke16Icon";
import PlusStroke16Icon from "@depository/components/icons/PlusStroke16Icon";
import PuzzlePieceStroke16Icon from "@depository/components/icons/PuzzlePieceStroke16Icon";
import QuestionMarkStroke16Icon from "@depository/components/icons/QuestionMarkStroke16Icon";
import QuoteStroke16Icon from "@depository/components/icons/QuoteStroke16Icon";
import RearrangeStroke16Icon from "@depository/components/icons/RearrangeStroke16Icon";
import RecordStroke16Icon from "@depository/components/icons/RecordStroke16Icon";
import ReloadStroke16Icon from "@depository/components/icons/ReloadStroke16Icon";
import SearchStroke16Icon from "@depository/components/icons/SearchStroke16Icon";
import ShapesStroke16Icon from "@depository/components/icons/ShapesStroke16Icon";
import ShareStroke16Icon from "@depository/components/icons/ShareStroke16Icon";
import ShieldStroke16Icon from "@depository/components/icons/ShieldStroke16Icon";
import ShoppingCartStroke16Icon from "@depository/components/icons/ShoppingCartStroke16Icon";
import SignpostStroke16Icon from "@depository/components/icons/SignpostStroke16Icon";
import SlackStroke16Icon from "@depository/components/icons/SlackStroke16Icon";
import SmileSlightStroke16Icon from "@depository/components/icons/SmileSlightStroke16Icon";
import SmileyStroke16Icon from "@depository/components/icons/SmileyStroke16Icon";
import SortStroke16Icon from "@depository/components/icons/SortStroke16Icon";
import SpeechBubbleConversationStroke16Icon from "@depository/components/icons/SpeechBubbleConversationStroke16Icon";
import SpeechBubbleLightningBoltStroke16Icon from "@depository/components/icons/SpeechBubbleLightningBoltStroke16Icon";
import SpeechBubblePlainStroke16Icon from "@depository/components/icons/SpeechBubblePlainStroke16Icon";
import StarStroke16Icon from "@depository/components/icons/StarStroke16Icon";
import TableStroke16Icon from "@depository/components/icons/TableStroke16Icon";
import TagStroke16Icon from "@depository/components/icons/TagStroke16Icon";
import TerminalCliStroke16Icon from "@depository/components/icons/TerminalCliStroke16Icon";
import TerminalWindowStroke16Icon from "@depository/components/icons/TerminalWindowStroke16Icon";
import TextColorStroke16Icon from "@depository/components/icons/TextColorStroke16Icon";
import TextStroke16Icon from "@depository/components/icons/TextStroke16Icon";
import ThumbsDownStroke16Icon from "@depository/components/icons/ThumbsDownStroke16Icon";
import ThumbsUpStroke16Icon from "@depository/components/icons/ThumbsUpStroke16Icon";
import TranslationCreatedStroke16Icon from "@depository/components/icons/TranslationCreatedStroke16Icon";
import TranslationDeletedStroke16Icon from "@depository/components/icons/TranslationDeletedStroke16Icon";
import TranslationExistsStroke16Icon from "@depository/components/icons/TranslationExistsStroke16Icon";
import TranslationOutdatedStroke16Icon from "@depository/components/icons/TranslationOutdatedStroke16Icon";
import TranslationUpdatedStroke16Icon from "@depository/components/icons/TranslationUpdatedStroke16Icon";
import TrashStroke16Icon from "@depository/components/icons/TrashStroke16Icon";
import TwitterStroke16Icon from "@depository/components/icons/TwitterStroke16Icon";
import UnderlineStroke16Icon from "@depository/components/icons/UnderlineStroke16Icon";
import UploadStroke16Icon from "@depository/components/icons/UploadStroke16Icon";
import UserCircleStroke16Icon from "@depository/components/icons/UserCircleStroke16Icon";
import UserFollowStroke16Icon from "@depository/components/icons/UserFollowStroke16Icon";
import UserGroupStroke16Icon from "@depository/components/icons/UserGroupStroke16Icon";
import UserListStroke16Icon from "@depository/components/icons/UserListStroke16Icon";
import UserSoloStroke16Icon from "@depository/components/icons/UserSoloStroke16Icon";
import UserUnfollowStroke16Icon from "@depository/components/icons/UserUnfollowStroke16Icon";
import VoicemailStroke16Icon from "@depository/components/icons/VoicemailStroke16Icon";
import VolumeMutedStroke16Icon from "@depository/components/icons/VolumeMutedStroke16Icon";
import VolumeUnmutedStroke16Icon from "@depository/components/icons/VolumeUnmutedStroke16Icon";
import WechatStroke16Icon from "@depository/components/icons/WechatStroke16Icon";
import WhatsappStroke16Icon from "@depository/components/icons/WhatsappStroke16Icon";
import WrapLeftStroke16Icon from "@depository/components/icons/WrapLeftStroke16Icon";
import WrapRightStroke16Icon from "@depository/components/icons/WrapRightStroke16Icon";
import XCircleStroke16Icon from "@depository/components/icons/XCircleStroke16Icon";
import XStroke16Icon from "@depository/components/icons/XStroke16Icon";
import ZendeskStroke16Icon from "@depository/components/icons/ZendeskStroke16Icon";
import AnswerBot26Icon from "@depository/components/icons/AnswerBot26Icon";
import App26Icon from "@depository/components/icons/App26Icon";
import ArrangeContent26Icon from "@depository/components/icons/ArrangeContent26Icon";
import ArrowRightLeft26Icon from "@depository/components/icons/ArrowRightLeft26Icon";
import BarChart26Icon from "@depository/components/icons/BarChart26Icon";
import Book26Icon from "@depository/components/icons/Book26Icon";
import BotGeneric26Icon from "@depository/components/icons/BotGeneric26Icon";
import Building26Icon from "@depository/components/icons/Building26Icon";
import CallIn26Icon from "@depository/components/icons/CallIn26Icon";
import Chat26Icon from "@depository/components/icons/Chat26Icon";
import Checkbox26Icon from "@depository/components/icons/Checkbox26Icon";
import Clipboard26Icon from "@depository/components/icons/Clipboard26Icon";
import Clock26Icon from "@depository/components/icons/Clock26Icon";
import CloudUpload26Icon from "@depository/components/icons/CloudUpload26Icon";
import CreditCard26Icon from "@depository/components/icons/CreditCard26Icon";
import Customize26Icon from "@depository/components/icons/Customize26Icon";
import Dashboard26Icon from "@depository/components/icons/Dashboard26Icon";
import Ellipsis26Icon from "@depository/components/icons/Ellipsis26Icon";
import FileDocument26Icon from "@depository/components/icons/FileDocument26Icon";
import FileError26Icon from "@depository/components/icons/FileError26Icon";
import FileImage26Icon from "@depository/components/icons/FileImage26Icon";
import FilePdf26Icon from "@depository/components/icons/FilePdf26Icon";
import FilePresentation26Icon from "@depository/components/icons/FilePresentation26Icon";
import FileSpreadsheet26Icon from "@depository/components/icons/FileSpreadsheet26Icon";
import FileZip26Icon from "@depository/components/icons/FileZip26Icon";
import File26Icon from "@depository/components/icons/File26Icon";
import Garden26Icon from "@depository/components/icons/Garden26Icon";
import GridAdd26Icon from "@depository/components/icons/GridAdd26Icon";
import Headset26Icon from "@depository/components/icons/Headset26Icon";
import HelpCenter26Icon from "@depository/components/icons/HelpCenter26Icon";
import Hook26Icon from "@depository/components/icons/Hook26Icon";
import KnowledgeBase26Icon from "@depository/components/icons/KnowledgeBase26Icon";
import LineChart26Icon from "@depository/components/icons/LineChart26Icon";
import Macro26Icon from "@depository/components/icons/Macro26Icon";
import Moderation26Icon from "@depository/components/icons/Moderation26Icon";
import Monitor26Icon from "@depository/components/icons/Monitor26Icon";
import Organization26Icon from "@depository/components/icons/Organization26Icon";
import Person26Icon from "@depository/components/icons/Person26Icon";
import Platform26Icon from "@depository/components/icons/Platform26Icon";
import Play26Icon from "@depository/components/icons/Play26Icon";
import RelationshapeChat26Icon from "@depository/components/icons/RelationshapeChat26Icon";
import RelationshapeConnect26Icon from "@depository/components/icons/RelationshapeConnect26Icon";
import RelationshapeExplore26Icon from "@depository/components/icons/RelationshapeExplore26Icon";
import RelationshapeGather26Icon from "@depository/components/icons/RelationshapeGather26Icon";
import RelationshapeGuide26Icon from "@depository/components/icons/RelationshapeGuide26Icon";
import RelationshapeMessage26Icon from "@depository/components/icons/RelationshapeMessage26Icon";
import RelationshapeSell26Icon from "@depository/components/icons/RelationshapeSell26Icon";
import RelationshapeSupport26Icon from "@depository/components/icons/RelationshapeSupport26Icon";
import RelationshapeTalk26Icon from "@depository/components/icons/RelationshapeTalk26Icon";
import Search26Icon from "@depository/components/icons/Search26Icon";
import Security26Icon from "@depository/components/icons/Security26Icon";
import Shapes26Icon from "@depository/components/icons/Shapes26Icon";
import Sunshine26Icon from "@depository/components/icons/Sunshine26Icon";
import UserLock26Icon from "@depository/components/icons/UserLock26Icon";
import Widget26Icon from "@depository/components/icons/Widget26Icon";
import Workflow26Icon from "@depository/components/icons/Workflow26Icon";
import Zendesk26Icon from "@depository/components/icons/Zendesk26Icon";
import CustomerListsFill26Icon from "@depository/components/icons/CustomerListsFill26Icon";
import EmailFill26Icon from "@depository/components/icons/EmailFill26Icon";
import GroupFill26Icon from "@depository/components/icons/GroupFill26Icon";
import HomeFill26Icon from "@depository/components/icons/HomeFill26Icon";
import SettingsFill26Icon from "@depository/components/icons/SettingsFill26Icon";
import ViewsFill26Icon from "@depository/components/icons/ViewsFill26Icon";
import WordmarkBoldSuite26Icon from "@depository/components/icons/WordmarkBoldSuite26Icon";
import WordmarkBoldSupport26Icon from "@depository/components/icons/WordmarkBoldSupport26Icon";
import WordmarkCapitalSuite26Icon from "@depository/components/icons/WordmarkCapitalSuite26Icon";
import WordmarkCapitalThe26Icon from "@depository/components/icons/WordmarkCapitalThe26Icon";
import WordmarkCapitalZendesk26Icon from "@depository/components/icons/WordmarkCapitalZendesk26Icon";
import WordmarkChat26Icon from "@depository/components/icons/WordmarkChat26Icon";
import WordmarkConnect26Icon from "@depository/components/icons/WordmarkConnect26Icon";
import WordmarkExplore26Icon from "@depository/components/icons/WordmarkExplore26Icon";
import WordmarkGarden26Icon from "@depository/components/icons/WordmarkGarden26Icon";
import WordmarkGather26Icon from "@depository/components/icons/WordmarkGather26Icon";
import WordmarkGuide26Icon from "@depository/components/icons/WordmarkGuide26Icon";
import WordmarkHelpCenter26Icon from "@depository/components/icons/WordmarkHelpCenter26Icon";
import WordmarkInbox26Icon from "@depository/components/icons/WordmarkInbox26Icon";
import WordmarkMessage26Icon from "@depository/components/icons/WordmarkMessage26Icon";
import WordmarkMessaging26Icon from "@depository/components/icons/WordmarkMessaging26Icon";
import WordmarkReach26Icon from "@depository/components/icons/WordmarkReach26Icon";
import WordmarkSell26Icon from "@depository/components/icons/WordmarkSell26Icon";
import WordmarkSunshine26Icon from "@depository/components/icons/WordmarkSunshine26Icon";
import WordmarkSupport26Icon from "@depository/components/icons/WordmarkSupport26Icon";
import WordmarkTalk26Icon from "@depository/components/icons/WordmarkTalk26Icon";
import WordmarkZendesk26Icon from "@depository/components/icons/WordmarkZendesk26Icon";

const columnStyles = css`
  & {
    display: grid;
    grid-template-columns: auto 1fr auto 1fr;
    gap: 1em;
    fill: gray;
    margin: 1em 0;
  }
`;

const copyStyles = css`
  & {
    border: none;
    background: none;
    text-align: left;
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

let interceptCopy;

document.addEventListener("copy", (e) => {
  if (interceptCopy) {
    e.clipboardData.setData("text/plain", interceptCopy);
    e.preventDefault();
  }
});

const copy = (text) => {
  interceptCopy = text;
  document.execCommand("copy");
  interceptCopy = null;
};

class IconCopyButton {
  constructor() {
    this.onClick = () => {
      const name = this.props.children;
      copy(`import ${name} from "@depository/components/icons/${name}.js";`);
    };
  }

  render({ children }) {
    return html`
      <button onClick=${this.onClick} class=${copyStyles} title="Click to copy">
        ${children}
      </button>
    `;
  }
}

class IconsPage {
  render() {
    return html`
      <${Title}>Icons<//>
      <${SubTitle}>
        These icon components is extracted from
        <${Anchor} href="https://garden.zendesk.com/design/icons/installation"
          >Zendesk Garden<//
        >
        and turned into components.
      <//>
      <${Line} />
      <${Heading} level="2">Usage<//>
      <p>
        The icons come in two flavors – monochrome and two-tone. The primary
        fill/stroke will always be specified as
        <code class="inline">currentColor</code> This means CSS text color style
        will cascade to the icon. Two-tone icons can receive a secondary color
        via the <code class="inline">fill</code> style property.
      </p>
      <${Example} src=${new URL("./IconUsage.js", import.meta.url)}>
        <${IconUsage} />
      <//>
      <p>
        Icons that users two-tones is displayed with gray and black. You can
        control the colors the following way.
      </p>
      <${Example} src=${new URL("./IconColors.js", import.meta.url)}>
        <${IconColors} />
      <//>
      <p>
        Tip <${LightbulbStroke12Icon} /> click on the icon label to copy the
        import to that clipboard.
      </p>
      <${Heading} level="2">12px icons<//>
      <div class=${columnStyles}>
        <${Grip12Icon} />
        <${IconCopyButton}>Grip12Icon<//>
        <${Paperclip12Icon} />
        <${IconCopyButton}>Paperclip12Icon<//>
      </div>
      <${Heading} level="2">12px icons (fill)<//>
      <div class=${columnStyles}>
        <${I123Fill12Icon} />
        <${IconCopyButton}>I123Fill12Icon<//>
        <${AdjustFill12Icon} />
        <${IconCopyButton}>AdjustFill12Icon<//>
        <${AlertErrorFill12Icon} />
        <${IconCopyButton}>AlertErrorFill12Icon<//>
        <${AlertWarningFill12Icon} />
        <${IconCopyButton}>AlertWarningFill12Icon<//>
        <${AlignCenterFill12Icon} />
        <${IconCopyButton}>AlignCenterFill12Icon<//>
        <${AlignJustifyFill12Icon} />
        <${IconCopyButton}>AlignJustifyFill12Icon<//>
        <${AlignLeftFill12Icon} />
        <${IconCopyButton}>AlignLeftFill12Icon<//>
        <${AlignRightFill12Icon} />
        <${IconCopyButton}>AlignRightFill12Icon<//>
        <${AltTextFill12Icon} />
        <${IconCopyButton}>AltTextFill12Icon<//>
        <${ArrowLeftFill12Icon} />
        <${IconCopyButton}>ArrowLeftFill12Icon<//>
        <${ArrowLeftUpFill12Icon} />
        <${IconCopyButton}>ArrowLeftUpFill12Icon<//>
        <${ArrowRetweetFill12Icon} />
        <${IconCopyButton}>ArrowRetweetFill12Icon<//>
        <${ArrowReverseFill12Icon} />
        <${IconCopyButton}>ArrowReverseFill12Icon<//>
        <${ArrowTrendingFill12Icon} />
        <${IconCopyButton}>ArrowTrendingFill12Icon<//>
        <${AsteriskFill12Icon} />
        <${IconCopyButton}>AsteriskFill12Icon<//>
        <${AtFill12Icon} />
        <${IconCopyButton}>AtFill12Icon<//>
        <${BarChartFill12Icon} />
        <${IconCopyButton}>BarChartFill12Icon<//>
        <${BasketballFill12Icon} />
        <${IconCopyButton}>BasketballFill12Icon<//>
        <${BoldFill12Icon} />
        <${IconCopyButton}>BoldFill12Icon<//>
        <${BookClosedFill12Icon} />
        <${IconCopyButton}>BookClosedFill12Icon<//>
        <${BookOpenFill12Icon} />
        <${IconCopyButton}>BookOpenFill12Icon<//>
        <${Box3dFill12Icon} />
        <${IconCopyButton}>Box3dFill12Icon<//>
        <${BuildingFill12Icon} />
        <${IconCopyButton}>BuildingFill12Icon<//>
        <${CalendarFill12Icon} />
        <${IconCopyButton}>CalendarFill12Icon<//>
        <${CarFill12Icon} />
        <${IconCopyButton}>CarFill12Icon<//>
        <${CenterFill12Icon} />
        <${IconCopyButton}>CenterFill12Icon<//>
        <${CheckBadgeFill12Icon} />
        <${IconCopyButton}>CheckBadgeFill12Icon<//>
        <${CheckBoxDoubleFill12Icon} />
        <${IconCopyButton}>CheckBoxDoubleFill12Icon<//>
        <${CheckBoxFill12Icon} />
        <${IconCopyButton}>CheckBoxFill12Icon<//>
        <${CheckCircleFill12Icon} />
        <${IconCopyButton}>CheckCircleFill12Icon<//>
        <${CheckDoubleFill12Icon} />
        <${IconCopyButton}>CheckDoubleFill12Icon<//>
        <${CheckLgFill12Icon} />
        <${IconCopyButton}>CheckLgFill12Icon<//>
        <${CheckSmFill12Icon} />
        <${IconCopyButton}>CheckSmFill12Icon<//>
        <${ChevronBoxFill12Icon} />
        <${IconCopyButton}>ChevronBoxFill12Icon<//>
        <${ChevronDoubleDownFill12Icon} />
        <${IconCopyButton}>ChevronDoubleDownFill12Icon<//>
        <${ChevronDoubleLeftFill12Icon} />
        <${IconCopyButton}>ChevronDoubleLeftFill12Icon<//>
        <${ChevronDoubleRightFill12Icon} />
        <${IconCopyButton}>ChevronDoubleRightFill12Icon<//>
        <${ChevronDoubleUpFill12Icon} />
        <${IconCopyButton}>ChevronDoubleUpFill12Icon<//>
        <${ChevronDownFill12Icon} />
        <${IconCopyButton}>ChevronDownFill12Icon<//>
        <${ChevronLeftFill12Icon} />
        <${IconCopyButton}>ChevronLeftFill12Icon<//>
        <${ChevronRightFill12Icon} />
        <${IconCopyButton}>ChevronRightFill12Icon<//>
        <${ChevronUpFill12Icon} />
        <${IconCopyButton}>ChevronUpFill12Icon<//>
        <${CircleFill12Icon} />
        <${IconCopyButton}>CircleFill12Icon<//>
        <${CircleFullFill12Icon} />
        <${IconCopyButton}>CircleFullFill12Icon<//>
        <${CircleLineFill12Icon} />
        <${IconCopyButton}>CircleLineFill12Icon<//>
        <${CircleSmFill12Icon} />
        <${IconCopyButton}>CircleSmFill12Icon<//>
        <${ClipboardBlankFill12Icon} />
        <${IconCopyButton}>ClipboardBlankFill12Icon<//>
        <${ClipboardCheckFill12Icon} />
        <${IconCopyButton}>ClipboardCheckFill12Icon<//>
        <${ClipboardListFill12Icon} />
        <${IconCopyButton}>ClipboardListFill12Icon<//>
        <${ClockCycleFill12Icon} />
        <${IconCopyButton}>ClockCycleFill12Icon<//>
        <${ClockFill12Icon} />
        <${IconCopyButton}>ClockFill12Icon<//>
        <${ClockInFill12Icon} />
        <${IconCopyButton}>ClockInFill12Icon<//>
        <${ClockOutFill12Icon} />
        <${IconCopyButton}>ClockOutFill12Icon<//>
        <${CopyFill12Icon} />
        <${IconCopyButton}>CopyFill12Icon<//>
        <${CreditCardFill12Icon} />
        <${IconCopyButton}>CreditCardFill12Icon<//>
        <${CssFill12Icon} />
        <${IconCopyButton}>CssFill12Icon<//>
        <${CursorArrowFill12Icon} />
        <${IconCopyButton}>CursorArrowFill12Icon<//>
        <${CutleryFill12Icon} />
        <${IconCopyButton}>CutleryFill12Icon<//>
        <${DashFill12Icon} />
        <${IconCopyButton}>DashFill12Icon<//>
        <${DatabaseFill12Icon} />
        <${IconCopyButton}>DatabaseFill12Icon<//>
        <${DecimalFill12Icon} />
        <${IconCopyButton}>DecimalFill12Icon<//>
        <${DirectionLtrFill12Icon} />
        <${IconCopyButton}>DirectionLtrFill12Icon<//>
        <${DirectionRtlFill12Icon} />
        <${IconCopyButton}>DirectionRtlFill12Icon<//>
        <${DownloadFill12Icon} />
        <${IconCopyButton}>DownloadFill12Icon<//>
        <${DuplicateFill12Icon} />
        <${IconCopyButton}>DuplicateFill12Icon<//>
        <${EditRedoFill12Icon} />
        <${IconCopyButton}>EditRedoFill12Icon<//>
        <${EditUndoFill12Icon} />
        <${IconCopyButton}>EditUndoFill12Icon<//>
        <${EmailFill12Icon} />
        <${IconCopyButton}>EmailFill12Icon<//>
        <${EraserFill12Icon} />
        <${IconCopyButton}>EraserFill12Icon<//>
        <${ExitFill12Icon} />
        <${IconCopyButton}>ExitFill12Icon<//>
        <${EyeFill12Icon} />
        <${IconCopyButton}>EyeFill12Icon<//>
        <${FacebookFill12Icon} />
        <${IconCopyButton}>FacebookFill12Icon<//>
        <${FileDocumentFill12Icon} />
        <${IconCopyButton}>FileDocumentFill12Icon<//>
        <${FileErrorFill12Icon} />
        <${IconCopyButton}>FileErrorFill12Icon<//>
        <${FileGenericFill12Icon} />
        <${IconCopyButton}>FileGenericFill12Icon<//>
        <${FileImageFill12Icon} />
        <${IconCopyButton}>FileImageFill12Icon<//>
        <${FilePdfFill12Icon} />
        <${IconCopyButton}>FilePdfFill12Icon<//>
        <${FilePresentationFill12Icon} />
        <${IconCopyButton}>FilePresentationFill12Icon<//>
        <${FileSpreadsheetFill12Icon} />
        <${IconCopyButton}>FileSpreadsheetFill12Icon<//>
        <${FileZipFill12Icon} />
        <${IconCopyButton}>FileZipFill12Icon<//>
        <${FilterFill12Icon} />
        <${IconCopyButton}>FilterFill12Icon<//>
        <${FlagFill12Icon} />
        <${IconCopyButton}>FlagFill12Icon<//>
        <${FolderClosedFill12Icon} />
        <${IconCopyButton}>FolderClosedFill12Icon<//>
        <${FolderOpenFill12Icon} />
        <${IconCopyButton}>FolderOpenFill12Icon<//>
        <${FullWidthFill12Icon} />
        <${IconCopyButton}>FullWidthFill12Icon<//>
        <${GearFill12Icon} />
        <${IconCopyButton}>GearFill12Icon<//>
        <${GithubFill12Icon} />
        <${IconCopyButton}>GithubFill12Icon<//>
        <${GlobeFill12Icon} />
        <${IconCopyButton}>GlobeFill12Icon<//>
        <${Grid2x2Fill12Icon} />
        <${IconCopyButton}>Grid2x2Fill12Icon<//>
        <${Grid3x3Fill12Icon} />
        <${IconCopyButton}>Grid3x3Fill12Icon<//>
        <${HeadingFill12Icon} />
        <${IconCopyButton}>HeadingFill12Icon<//>
        <${HeartFill12Icon} />
        <${IconCopyButton}>HeartFill12Icon<//>
        <${HistoryFill12Icon} />
        <${IconCopyButton}>HistoryFill12Icon<//>
        <${HomeFill12Icon} />
        <${IconCopyButton}>HomeFill12Icon<//>
        <${HorizontalRuleFill12Icon} />
        <${IconCopyButton}>HorizontalRuleFill12Icon<//>
        <${ImageFill12Icon} />
        <${IconCopyButton}>ImageFill12Icon<//>
        <${InboxFill12Icon} />
        <${IconCopyButton}>InboxFill12Icon<//>
        <${IndentDecreaseFill12Icon} />
        <${IconCopyButton}>IndentDecreaseFill12Icon<//>
        <${IndentIncreaseFill12Icon} />
        <${IconCopyButton}>IndentIncreaseFill12Icon<//>
        <${InfoFill12Icon} />
        <${IconCopyButton}>InfoFill12Icon<//>
        <${InterlockingRingsFill12Icon} />
        <${IconCopyButton}>InterlockingRingsFill12Icon<//>
        <${ItalicFill12Icon} />
        <${IconCopyButton}>ItalicFill12Icon<//>
        <${LeafFill12Icon} />
        <${IconCopyButton}>LeafFill12Icon<//>
        <${LifesaverFill12Icon} />
        <${IconCopyButton}>LifesaverFill12Icon<//>
        <${LightbulbFill12Icon} />
        <${IconCopyButton}>LightbulbFill12Icon<//>
        <${LightningBoltFill12Icon} />
        <${IconCopyButton}>LightningBoltFill12Icon<//>
        <${LineGraphFill12Icon} />
        <${IconCopyButton}>LineGraphFill12Icon<//>
        <${LineSocialFill12Icon} />
        <${IconCopyButton}>LineSocialFill12Icon<//>
        <${LinkFill12Icon} />
        <${IconCopyButton}>LinkFill12Icon<//>
        <${LinkRemoveFill12Icon} />
        <${IconCopyButton}>LinkRemoveFill12Icon<//>
        <${LinkedinFill12Icon} />
        <${IconCopyButton}>LinkedinFill12Icon<//>
        <${ListBulletFill12Icon} />
        <${IconCopyButton}>ListBulletFill12Icon<//>
        <${ListNumberFill12Icon} />
        <${IconCopyButton}>ListNumberFill12Icon<//>
        <${ListNumberRtlFill12Icon} />
        <${IconCopyButton}>ListNumberRtlFill12Icon<//>
        <${LocationFill12Icon} />
        <${IconCopyButton}>LocationFill12Icon<//>
        <${LockLockedFill12Icon} />
        <${IconCopyButton}>LockLockedFill12Icon<//>
        <${LockUnlockedFill12Icon} />
        <${IconCopyButton}>LockUnlockedFill12Icon<//>
        <${MarkupFill12Icon} />
        <${IconCopyButton}>MarkupFill12Icon<//>
        <${MaximizeFill12Icon} />
        <${IconCopyButton}>MaximizeFill12Icon<//>
        <${MegaphoneFill12Icon} />
        <${IconCopyButton}>MegaphoneFill12Icon<//>
        <${MenuFill12Icon} />
        <${IconCopyButton}>MenuFill12Icon<//>
        <${MessengerFill12Icon} />
        <${IconCopyButton}>MessengerFill12Icon<//>
        <${MicrophoneOffFill12Icon} />
        <${IconCopyButton}>MicrophoneOffFill12Icon<//>
        <${MicrophoneOnFill12Icon} />
        <${IconCopyButton}>MicrophoneOnFill12Icon<//>
        <${MinimizeFill12Icon} />
        <${IconCopyButton}>MinimizeFill12Icon<//>
        <${MobilePhoneFill12Icon} />
        <${IconCopyButton}>MobilePhoneFill12Icon<//>
        <${MonitorFill12Icon} />
        <${IconCopyButton}>MonitorFill12Icon<//>
        <${MultilineFill12Icon} />
        <${IconCopyButton}>MultilineFill12Icon<//>
        <${NewWindowFill12Icon} />
        <${IconCopyButton}>NewWindowFill12Icon<//>
        <${NotesFill12Icon} />
        <${IconCopyButton}>NotesFill12Icon<//>
        <${NotificationFill12Icon} />
        <${IconCopyButton}>NotificationFill12Icon<//>
        <${NumberFill12Icon} />
        <${IconCopyButton}>NumberFill12Icon<//>
        <${OriginalSizeFill12Icon} />
        <${IconCopyButton}>OriginalSizeFill12Icon<//>
        <${OverflowFill12Icon} />
        <${IconCopyButton}>OverflowFill12Icon<//>
        <${OverflowVerticalFill12Icon} />
        <${IconCopyButton}>OverflowVerticalFill12Icon<//>
        <${PaletteFill12Icon} />
        <${IconCopyButton}>PaletteFill12Icon<//>
        <${PanelsFill12Icon} />
        <${IconCopyButton}>PanelsFill12Icon<//>
        <${PauseFill12Icon} />
        <${IconCopyButton}>PauseFill12Icon<//>
        <${PencilFill12Icon} />
        <${IconCopyButton}>PencilFill12Icon<//>
        <${PhoneCallEndFill12Icon} />
        <${IconCopyButton}>PhoneCallEndFill12Icon<//>
        <${PhoneCallInFill12Icon} />
        <${IconCopyButton}>PhoneCallInFill12Icon<//>
        <${PhoneCallOutFill12Icon} />
        <${IconCopyButton}>PhoneCallOutFill12Icon<//>
        <${PhoneCallPauseFill12Icon} />
        <${IconCopyButton}>PhoneCallPauseFill12Icon<//>
        <${PhoneCallSpeakerFill12Icon} />
        <${IconCopyButton}>PhoneCallSpeakerFill12Icon<//>
        <${PhoneCallTransferFill12Icon} />
        <${IconCopyButton}>PhoneCallTransferFill12Icon<//>
        <${PhoneFill12Icon} />
        <${IconCopyButton}>PhoneFill12Icon<//>
        <${PlayCircleFill12Icon} />
        <${IconCopyButton}>PlayCircleFill12Icon<//>
        <${PlayFill12Icon} />
        <${IconCopyButton}>PlayFill12Icon<//>
        <${PlugFill12Icon} />
        <${IconCopyButton}>PlugFill12Icon<//>
        <${PlusCircleFill12Icon} />
        <${IconCopyButton}>PlusCircleFill12Icon<//>
        <${PlusFill12Icon} />
        <${IconCopyButton}>PlusFill12Icon<//>
        <${PuzzlePieceFill12Icon} />
        <${IconCopyButton}>PuzzlePieceFill12Icon<//>
        <${QuestionMarkFill12Icon} />
        <${IconCopyButton}>QuestionMarkFill12Icon<//>
        <${QuoteFill12Icon} />
        <${IconCopyButton}>QuoteFill12Icon<//>
        <${RearrangeFill12Icon} />
        <${IconCopyButton}>RearrangeFill12Icon<//>
        <${RecordFill12Icon} />
        <${IconCopyButton}>RecordFill12Icon<//>
        <${ReloadFill12Icon} />
        <${IconCopyButton}>ReloadFill12Icon<//>
        <${SearchFill12Icon} />
        <${IconCopyButton}>SearchFill12Icon<//>
        <${ShapesFill12Icon} />
        <${IconCopyButton}>ShapesFill12Icon<//>
        <${ShareFill12Icon} />
        <${IconCopyButton}>ShareFill12Icon<//>
        <${ShieldFill12Icon} />
        <${IconCopyButton}>ShieldFill12Icon<//>
        <${ShoppingCartFill12Icon} />
        <${IconCopyButton}>ShoppingCartFill12Icon<//>
        <${SignpostFill12Icon} />
        <${IconCopyButton}>SignpostFill12Icon<//>
        <${SlackFill12Icon} />
        <${IconCopyButton}>SlackFill12Icon<//>
        <${SmileSlightFill12Icon} />
        <${IconCopyButton}>SmileSlightFill12Icon<//>
        <${SmileyFill12Icon} />
        <${IconCopyButton}>SmileyFill12Icon<//>
        <${SortFill12Icon} />
        <${IconCopyButton}>SortFill12Icon<//>
        <${SpeechBubbleConversationFill12Icon} />
        <${IconCopyButton}>SpeechBubbleConversationFill12Icon<//>
        <${SpeechBubbleLightningBoltFill12Icon} />
        <${IconCopyButton}>SpeechBubbleLightningBoltFill12Icon<//>
        <${SpeechBubblePlainFill12Icon} />
        <${IconCopyButton}>SpeechBubblePlainFill12Icon<//>
        <${StarFill12Icon} />
        <${IconCopyButton}>StarFill12Icon<//>
        <${TableFill12Icon} />
        <${IconCopyButton}>TableFill12Icon<//>
        <${TagFill12Icon} />
        <${IconCopyButton}>TagFill12Icon<//>
        <${TerminalCliFill12Icon} />
        <${IconCopyButton}>TerminalCliFill12Icon<//>
        <${TerminalWindowFill12Icon} />
        <${IconCopyButton}>TerminalWindowFill12Icon<//>
        <${TextColorFill12Icon} />
        <${IconCopyButton}>TextColorFill12Icon<//>
        <${TextFill12Icon} />
        <${IconCopyButton}>TextFill12Icon<//>
        <${ThumbsDownFill12Icon} />
        <${IconCopyButton}>ThumbsDownFill12Icon<//>
        <${ThumbsUpFill12Icon} />
        <${IconCopyButton}>ThumbsUpFill12Icon<//>
        <${TranslationCreatedFill12Icon} />
        <${IconCopyButton}>TranslationCreatedFill12Icon<//>
        <${TranslationDeletedFill12Icon} />
        <${IconCopyButton}>TranslationDeletedFill12Icon<//>
        <${TranslationExistsFill12Icon} />
        <${IconCopyButton}>TranslationExistsFill12Icon<//>
        <${TranslationOutdatedFill12Icon} />
        <${IconCopyButton}>TranslationOutdatedFill12Icon<//>
        <${TranslationUpdatedFill12Icon} />
        <${IconCopyButton}>TranslationUpdatedFill12Icon<//>
        <${TrashFill12Icon} />
        <${IconCopyButton}>TrashFill12Icon<//>
        <${TwitterFill12Icon} />
        <${IconCopyButton}>TwitterFill12Icon<//>
        <${UnderlineFill12Icon} />
        <${IconCopyButton}>UnderlineFill12Icon<//>
        <${UploadFill12Icon} />
        <${IconCopyButton}>UploadFill12Icon<//>
        <${UserCircleFill12Icon} />
        <${IconCopyButton}>UserCircleFill12Icon<//>
        <${UserFollowFill12Icon} />
        <${IconCopyButton}>UserFollowFill12Icon<//>
        <${UserGroupFill12Icon} />
        <${IconCopyButton}>UserGroupFill12Icon<//>
        <${UserListFill12Icon} />
        <${IconCopyButton}>UserListFill12Icon<//>
        <${UserSoloFill12Icon} />
        <${IconCopyButton}>UserSoloFill12Icon<//>
        <${UserUnfollowFill12Icon} />
        <${IconCopyButton}>UserUnfollowFill12Icon<//>
        <${VoicemailFill12Icon} />
        <${IconCopyButton}>VoicemailFill12Icon<//>
        <${VolumeMutedFill12Icon} />
        <${IconCopyButton}>VolumeMutedFill12Icon<//>
        <${VolumeUnmutedFill12Icon} />
        <${IconCopyButton}>VolumeUnmutedFill12Icon<//>
        <${WechatFill12Icon} />
        <${IconCopyButton}>WechatFill12Icon<//>
        <${WhatsappFill12Icon} />
        <${IconCopyButton}>WhatsappFill12Icon<//>
        <${WrapLeftFill12Icon} />
        <${IconCopyButton}>WrapLeftFill12Icon<//>
        <${WrapRightFill12Icon} />
        <${IconCopyButton}>WrapRightFill12Icon<//>
        <${XCircleFill12Icon} />
        <${IconCopyButton}>XCircleFill12Icon<//>
        <${XFill12Icon} />
        <${IconCopyButton}>XFill12Icon<//>
        <${ZendeskFill12Icon} />
        <${IconCopyButton}>ZendeskFill12Icon<//>
      </div>
      <${Heading} level="2">12px icons (stroke)<//>
      <div class=${columnStyles}>
        <${I123Stroke12Icon} />
        <${IconCopyButton}>I123Stroke12Icon<//>
        <${AdjustStroke12Icon} />
        <${IconCopyButton}>AdjustStroke12Icon<//>
        <${AlertErrorStroke12Icon} />
        <${IconCopyButton}>AlertErrorStroke12Icon<//>
        <${AlertWarningStroke12Icon} />
        <${IconCopyButton}>AlertWarningStroke12Icon<//>
        <${AlignCenterStroke12Icon} />
        <${IconCopyButton}>AlignCenterStroke12Icon<//>
        <${AlignJustifyStroke12Icon} />
        <${IconCopyButton}>AlignJustifyStroke12Icon<//>
        <${AlignLeftStroke12Icon} />
        <${IconCopyButton}>AlignLeftStroke12Icon<//>
        <${AlignRightStroke12Icon} />
        <${IconCopyButton}>AlignRightStroke12Icon<//>
        <${AltTextStroke12Icon} />
        <${IconCopyButton}>AltTextStroke12Icon<//>
        <${ArrowLeftStroke12Icon} />
        <${IconCopyButton}>ArrowLeftStroke12Icon<//>
        <${ArrowLeftUpStroke12Icon} />
        <${IconCopyButton}>ArrowLeftUpStroke12Icon<//>
        <${ArrowRetweetStroke12Icon} />
        <${IconCopyButton}>ArrowRetweetStroke12Icon<//>
        <${ArrowReverseStroke12Icon} />
        <${IconCopyButton}>ArrowReverseStroke12Icon<//>
        <${ArrowTrendingStroke12Icon} />
        <${IconCopyButton}>ArrowTrendingStroke12Icon<//>
        <${AsteriskStroke12Icon} />
        <${IconCopyButton}>AsteriskStroke12Icon<//>
        <${AtStroke12Icon} />
        <${IconCopyButton}>AtStroke12Icon<//>
        <${BarChartStroke12Icon} />
        <${IconCopyButton}>BarChartStroke12Icon<//>
        <${BasketballStroke12Icon} />
        <${IconCopyButton}>BasketballStroke12Icon<//>
        <${BoldStroke12Icon} />
        <${IconCopyButton}>BoldStroke12Icon<//>
        <${BookClosedStroke12Icon} />
        <${IconCopyButton}>BookClosedStroke12Icon<//>
        <${BookOpenStroke12Icon} />
        <${IconCopyButton}>BookOpenStroke12Icon<//>
        <${Box3dStroke12Icon} />
        <${IconCopyButton}>Box3dStroke12Icon<//>
        <${BuildingStroke12Icon} />
        <${IconCopyButton}>BuildingStroke12Icon<//>
        <${CalendarStroke12Icon} />
        <${IconCopyButton}>CalendarStroke12Icon<//>
        <${CarStroke12Icon} />
        <${IconCopyButton}>CarStroke12Icon<//>
        <${CenterStroke12Icon} />
        <${IconCopyButton}>CenterStroke12Icon<//>
        <${CheckBadgeStroke12Icon} />
        <${IconCopyButton}>CheckBadgeStroke12Icon<//>
        <${CheckBoxDoubleStroke12Icon} />
        <${IconCopyButton}>CheckBoxDoubleStroke12Icon<//>
        <${CheckBoxStroke12Icon} />
        <${IconCopyButton}>CheckBoxStroke12Icon<//>
        <${CheckCircleStroke12Icon} />
        <${IconCopyButton}>CheckCircleStroke12Icon<//>
        <${CheckDoubleStroke12Icon} />
        <${IconCopyButton}>CheckDoubleStroke12Icon<//>
        <${CheckLgStroke12Icon} />
        <${IconCopyButton}>CheckLgStroke12Icon<//>
        <${CheckSmStroke12Icon} />
        <${IconCopyButton}>CheckSmStroke12Icon<//>
        <${ChevronBoxStroke12Icon} />
        <${IconCopyButton}>ChevronBoxStroke12Icon<//>
        <${ChevronDoubleDownStroke12Icon} />
        <${IconCopyButton}>ChevronDoubleDownStroke12Icon<//>
        <${ChevronDoubleLeftStroke12Icon} />
        <${IconCopyButton}>ChevronDoubleLeftStroke12Icon<//>
        <${ChevronDoubleRightStroke12Icon} />
        <${IconCopyButton}>ChevronDoubleRightStroke12Icon<//>
        <${ChevronDoubleUpStroke12Icon} />
        <${IconCopyButton}>ChevronDoubleUpStroke12Icon<//>
        <${ChevronDownStroke12Icon} />
        <${IconCopyButton}>ChevronDownStroke12Icon<//>
        <${ChevronLeftStroke12Icon} />
        <${IconCopyButton}>ChevronLeftStroke12Icon<//>
        <${ChevronRightStroke12Icon} />
        <${IconCopyButton}>ChevronRightStroke12Icon<//>
        <${ChevronUpStroke12Icon} />
        <${IconCopyButton}>ChevronUpStroke12Icon<//>
        <${CircleFullStroke12Icon} />
        <${IconCopyButton}>CircleFullStroke12Icon<//>
        <${CircleLineStroke12Icon} />
        <${IconCopyButton}>CircleLineStroke12Icon<//>
        <${CircleSmStroke12Icon} />
        <${IconCopyButton}>CircleSmStroke12Icon<//>
        <${CircleStroke12Icon} />
        <${IconCopyButton}>CircleStroke12Icon<//>
        <${ClipboardBlankStroke12Icon} />
        <${IconCopyButton}>ClipboardBlankStroke12Icon<//>
        <${ClipboardCheckStroke12Icon} />
        <${IconCopyButton}>ClipboardCheckStroke12Icon<//>
        <${ClipboardListStroke12Icon} />
        <${IconCopyButton}>ClipboardListStroke12Icon<//>
        <${ClockCycleStroke12Icon} />
        <${IconCopyButton}>ClockCycleStroke12Icon<//>
        <${ClockInStroke12Icon} />
        <${IconCopyButton}>ClockInStroke12Icon<//>
        <${ClockOutStroke12Icon} />
        <${IconCopyButton}>ClockOutStroke12Icon<//>
        <${ClockStroke12Icon} />
        <${IconCopyButton}>ClockStroke12Icon<//>
        <${CopyStroke12Icon} />
        <${IconCopyButton}>CopyStroke12Icon<//>
        <${CreditCardStroke12Icon} />
        <${IconCopyButton}>CreditCardStroke12Icon<//>
        <${CssStroke12Icon} />
        <${IconCopyButton}>CssStroke12Icon<//>
        <${CursorArrowStroke12Icon} />
        <${IconCopyButton}>CursorArrowStroke12Icon<//>
        <${CutleryStroke12Icon} />
        <${IconCopyButton}>CutleryStroke12Icon<//>
        <${DashStroke12Icon} />
        <${IconCopyButton}>DashStroke12Icon<//>
        <${DatabaseStroke12Icon} />
        <${IconCopyButton}>DatabaseStroke12Icon<//>
        <${DecimalStroke12Icon} />
        <${IconCopyButton}>DecimalStroke12Icon<//>
        <${DirectionLtrStroke12Icon} />
        <${IconCopyButton}>DirectionLtrStroke12Icon<//>
        <${DirectionRtlStroke12Icon} />
        <${IconCopyButton}>DirectionRtlStroke12Icon<//>
        <${DownloadStroke12Icon} />
        <${IconCopyButton}>DownloadStroke12Icon<//>
        <${DuplicateStroke12Icon} />
        <${IconCopyButton}>DuplicateStroke12Icon<//>
        <${EditRedoStroke12Icon} />
        <${IconCopyButton}>EditRedoStroke12Icon<//>
        <${EditUndoStroke12Icon} />
        <${IconCopyButton}>EditUndoStroke12Icon<//>
        <${EmailStroke12Icon} />
        <${IconCopyButton}>EmailStroke12Icon<//>
        <${EraserStroke12Icon} />
        <${IconCopyButton}>EraserStroke12Icon<//>
        <${ExitStroke12Icon} />
        <${IconCopyButton}>ExitStroke12Icon<//>
        <${EyeStroke12Icon} />
        <${IconCopyButton}>EyeStroke12Icon<//>
        <${FacebookStroke12Icon} />
        <${IconCopyButton}>FacebookStroke12Icon<//>
        <${FileDocumentStroke12Icon} />
        <${IconCopyButton}>FileDocumentStroke12Icon<//>
        <${FileErrorStroke12Icon} />
        <${IconCopyButton}>FileErrorStroke12Icon<//>
        <${FileGenericStroke12Icon} />
        <${IconCopyButton}>FileGenericStroke12Icon<//>
        <${FileImageStroke12Icon} />
        <${IconCopyButton}>FileImageStroke12Icon<//>
        <${FilePdfStroke12Icon} />
        <${IconCopyButton}>FilePdfStroke12Icon<//>
        <${FilePresentationStroke12Icon} />
        <${IconCopyButton}>FilePresentationStroke12Icon<//>
        <${FileSpreadsheetStroke12Icon} />
        <${IconCopyButton}>FileSpreadsheetStroke12Icon<//>
        <${FileZipStroke12Icon} />
        <${IconCopyButton}>FileZipStroke12Icon<//>
        <${FilterStroke12Icon} />
        <${IconCopyButton}>FilterStroke12Icon<//>
        <${FlagStroke12Icon} />
        <${IconCopyButton}>FlagStroke12Icon<//>
        <${FolderClosedStroke12Icon} />
        <${IconCopyButton}>FolderClosedStroke12Icon<//>
        <${FolderOpenStroke12Icon} />
        <${IconCopyButton}>FolderOpenStroke12Icon<//>
        <${FullWidthStroke12Icon} />
        <${IconCopyButton}>FullWidthStroke12Icon<//>
        <${GearStroke12Icon} />
        <${IconCopyButton}>GearStroke12Icon<//>
        <${GithubStroke12Icon} />
        <${IconCopyButton}>GithubStroke12Icon<//>
        <${GlobeStroke12Icon} />
        <${IconCopyButton}>GlobeStroke12Icon<//>
        <${Grid2x2Stroke12Icon} />
        <${IconCopyButton}>Grid2x2Stroke12Icon<//>
        <${Grid3x3Stroke12Icon} />
        <${IconCopyButton}>Grid3x3Stroke12Icon<//>
        <${HeadingStroke12Icon} />
        <${IconCopyButton}>HeadingStroke12Icon<//>
        <${HeartStroke12Icon} />
        <${IconCopyButton}>HeartStroke12Icon<//>
        <${HistoryStroke12Icon} />
        <${IconCopyButton}>HistoryStroke12Icon<//>
        <${HomeStroke12Icon} />
        <${IconCopyButton}>HomeStroke12Icon<//>
        <${HorizontalRuleStroke12Icon} />
        <${IconCopyButton}>HorizontalRuleStroke12Icon<//>
        <${ImageStroke12Icon} />
        <${IconCopyButton}>ImageStroke12Icon<//>
        <${InboxStroke12Icon} />
        <${IconCopyButton}>InboxStroke12Icon<//>
        <${IndentDecreaseStroke12Icon} />
        <${IconCopyButton}>IndentDecreaseStroke12Icon<//>
        <${IndentIncreaseStroke12Icon} />
        <${IconCopyButton}>IndentIncreaseStroke12Icon<//>
        <${InfoStroke12Icon} />
        <${IconCopyButton}>InfoStroke12Icon<//>
        <${InterlockingRingsStroke12Icon} />
        <${IconCopyButton}>InterlockingRingsStroke12Icon<//>
        <${ItalicStroke12Icon} />
        <${IconCopyButton}>ItalicStroke12Icon<//>
        <${LeafStroke12Icon} />
        <${IconCopyButton}>LeafStroke12Icon<//>
        <${LifesaverStroke12Icon} />
        <${IconCopyButton}>LifesaverStroke12Icon<//>
        <${LightbulbStroke12Icon} />
        <${IconCopyButton}>LightbulbStroke12Icon<//>
        <${LightningBoltStroke12Icon} />
        <${IconCopyButton}>LightningBoltStroke12Icon<//>
        <${LineGraphStroke12Icon} />
        <${IconCopyButton}>LineGraphStroke12Icon<//>
        <${LineSocialStroke12Icon} />
        <${IconCopyButton}>LineSocialStroke12Icon<//>
        <${LinkRemoveStroke12Icon} />
        <${IconCopyButton}>LinkRemoveStroke12Icon<//>
        <${LinkStroke12Icon} />
        <${IconCopyButton}>LinkStroke12Icon<//>
        <${LinkedinStroke12Icon} />
        <${IconCopyButton}>LinkedinStroke12Icon<//>
        <${ListBulletStroke12Icon} />
        <${IconCopyButton}>ListBulletStroke12Icon<//>
        <${ListNumberRtlStroke12Icon} />
        <${IconCopyButton}>ListNumberRtlStroke12Icon<//>
        <${ListNumberStroke12Icon} />
        <${IconCopyButton}>ListNumberStroke12Icon<//>
        <${LocationStroke12Icon} />
        <${IconCopyButton}>LocationStroke12Icon<//>
        <${LockLockedStroke12Icon} />
        <${IconCopyButton}>LockLockedStroke12Icon<//>
        <${LockUnlockedStroke12Icon} />
        <${IconCopyButton}>LockUnlockedStroke12Icon<//>
        <${MarkupStroke12Icon} />
        <${IconCopyButton}>MarkupStroke12Icon<//>
        <${MaximizeStroke12Icon} />
        <${IconCopyButton}>MaximizeStroke12Icon<//>
        <${MegaphoneStroke12Icon} />
        <${IconCopyButton}>MegaphoneStroke12Icon<//>
        <${MenuStroke12Icon} />
        <${IconCopyButton}>MenuStroke12Icon<//>
        <${MessengerStroke12Icon} />
        <${IconCopyButton}>MessengerStroke12Icon<//>
        <${MicrophoneOffStroke12Icon} />
        <${IconCopyButton}>MicrophoneOffStroke12Icon<//>
        <${MicrophoneOnStroke12Icon} />
        <${IconCopyButton}>MicrophoneOnStroke12Icon<//>
        <${MinimizeStroke12Icon} />
        <${IconCopyButton}>MinimizeStroke12Icon<//>
        <${MobilePhoneStroke12Icon} />
        <${IconCopyButton}>MobilePhoneStroke12Icon<//>
        <${MonitorStroke12Icon} />
        <${IconCopyButton}>MonitorStroke12Icon<//>
        <${MultilineStroke12Icon} />
        <${IconCopyButton}>MultilineStroke12Icon<//>
        <${NewWindowStroke12Icon} />
        <${IconCopyButton}>NewWindowStroke12Icon<//>
        <${NotesStroke12Icon} />
        <${IconCopyButton}>NotesStroke12Icon<//>
        <${NotificationStroke12Icon} />
        <${IconCopyButton}>NotificationStroke12Icon<//>
        <${NumberStroke12Icon} />
        <${IconCopyButton}>NumberStroke12Icon<//>
        <${OriginalSizeStroke12Icon} />
        <${IconCopyButton}>OriginalSizeStroke12Icon<//>
        <${OverflowStroke12Icon} />
        <${IconCopyButton}>OverflowStroke12Icon<//>
        <${OverflowVerticalStroke12Icon} />
        <${IconCopyButton}>OverflowVerticalStroke12Icon<//>
        <${PaletteStroke12Icon} />
        <${IconCopyButton}>PaletteStroke12Icon<//>
        <${PanelsStroke12Icon} />
        <${IconCopyButton}>PanelsStroke12Icon<//>
        <${PauseStroke12Icon} />
        <${IconCopyButton}>PauseStroke12Icon<//>
        <${PencilStroke12Icon} />
        <${IconCopyButton}>PencilStroke12Icon<//>
        <${PhoneCallEndStroke12Icon} />
        <${IconCopyButton}>PhoneCallEndStroke12Icon<//>
        <${PhoneCallInStroke12Icon} />
        <${IconCopyButton}>PhoneCallInStroke12Icon<//>
        <${PhoneCallOutStroke12Icon} />
        <${IconCopyButton}>PhoneCallOutStroke12Icon<//>
        <${PhoneCallPauseStroke12Icon} />
        <${IconCopyButton}>PhoneCallPauseStroke12Icon<//>
        <${PhoneCallSpeakerStroke12Icon} />
        <${IconCopyButton}>PhoneCallSpeakerStroke12Icon<//>
        <${PhoneCallTransferStroke12Icon} />
        <${IconCopyButton}>PhoneCallTransferStroke12Icon<//>
        <${PhoneStroke12Icon} />
        <${IconCopyButton}>PhoneStroke12Icon<//>
        <${PlayCircleStroke12Icon} />
        <${IconCopyButton}>PlayCircleStroke12Icon<//>
        <${PlayStroke12Icon} />
        <${IconCopyButton}>PlayStroke12Icon<//>
        <${PlugStroke12Icon} />
        <${IconCopyButton}>PlugStroke12Icon<//>
        <${PlusCircleStroke12Icon} />
        <${IconCopyButton}>PlusCircleStroke12Icon<//>
        <${PlusStroke12Icon} />
        <${IconCopyButton}>PlusStroke12Icon<//>
        <${PuzzlePieceStroke12Icon} />
        <${IconCopyButton}>PuzzlePieceStroke12Icon<//>
        <${QuestionMarkStroke12Icon} />
        <${IconCopyButton}>QuestionMarkStroke12Icon<//>
        <${QuoteStroke12Icon} />
        <${IconCopyButton}>QuoteStroke12Icon<//>
        <${RearrangeStroke12Icon} />
        <${IconCopyButton}>RearrangeStroke12Icon<//>
        <${RecordStroke12Icon} />
        <${IconCopyButton}>RecordStroke12Icon<//>
        <${ReloadStroke12Icon} />
        <${IconCopyButton}>ReloadStroke12Icon<//>
        <${SearchStroke12Icon} />
        <${IconCopyButton}>SearchStroke12Icon<//>
        <${ShapesStroke12Icon} />
        <${IconCopyButton}>ShapesStroke12Icon<//>
        <${ShareStroke12Icon} />
        <${IconCopyButton}>ShareStroke12Icon<//>
        <${ShieldStroke12Icon} />
        <${IconCopyButton}>ShieldStroke12Icon<//>
        <${ShoppingCartStroke12Icon} />
        <${IconCopyButton}>ShoppingCartStroke12Icon<//>
        <${SignpostStroke12Icon} />
        <${IconCopyButton}>SignpostStroke12Icon<//>
        <${SlackStroke12Icon} />
        <${IconCopyButton}>SlackStroke12Icon<//>
        <${SmileSlightStroke12Icon} />
        <${IconCopyButton}>SmileSlightStroke12Icon<//>
        <${SmileyStroke12Icon} />
        <${IconCopyButton}>SmileyStroke12Icon<//>
        <${SortStroke12Icon} />
        <${IconCopyButton}>SortStroke12Icon<//>
        <${SpeechBubbleConversationStroke12Icon} />
        <${IconCopyButton}>SpeechBubbleConversationStroke12Icon<//>
        <${SpeechBubbleLightningBoltStroke12Icon} />
        <${IconCopyButton}>SpeechBubbleLightningBoltStroke12Icon<//>
        <${SpeechBubblePlainStroke12Icon} />
        <${IconCopyButton}>SpeechBubblePlainStroke12Icon<//>
        <${StarStroke12Icon} />
        <${IconCopyButton}>StarStroke12Icon<//>
        <${TableStroke12Icon} />
        <${IconCopyButton}>TableStroke12Icon<//>
        <${TagStroke12Icon} />
        <${IconCopyButton}>TagStroke12Icon<//>
        <${TerminalCliStroke12Icon} />
        <${IconCopyButton}>TerminalCliStroke12Icon<//>
        <${TerminalWindowStroke12Icon} />
        <${IconCopyButton}>TerminalWindowStroke12Icon<//>
        <${TextColorStroke12Icon} />
        <${IconCopyButton}>TextColorStroke12Icon<//>
        <${TextStroke12Icon} />
        <${IconCopyButton}>TextStroke12Icon<//>
        <${ThumbsDownStroke12Icon} />
        <${IconCopyButton}>ThumbsDownStroke12Icon<//>
        <${ThumbsUpStroke12Icon} />
        <${IconCopyButton}>ThumbsUpStroke12Icon<//>
        <${TranslationCreatedStroke12Icon} />
        <${IconCopyButton}>TranslationCreatedStroke12Icon<//>
        <${TranslationDeletedStroke12Icon} />
        <${IconCopyButton}>TranslationDeletedStroke12Icon<//>
        <${TranslationExistsStroke12Icon} />
        <${IconCopyButton}>TranslationExistsStroke12Icon<//>
        <${TranslationOutdatedStroke12Icon} />
        <${IconCopyButton}>TranslationOutdatedStroke12Icon<//>
        <${TranslationUpdatedStroke12Icon} />
        <${IconCopyButton}>TranslationUpdatedStroke12Icon<//>
        <${TrashStroke12Icon} />
        <${IconCopyButton}>TrashStroke12Icon<//>
        <${TwitterStroke12Icon} />
        <${IconCopyButton}>TwitterStroke12Icon<//>
        <${UnderlineStroke12Icon} />
        <${IconCopyButton}>UnderlineStroke12Icon<//>
        <${UploadStroke12Icon} />
        <${IconCopyButton}>UploadStroke12Icon<//>
        <${UserCircleStroke12Icon} />
        <${IconCopyButton}>UserCircleStroke12Icon<//>
        <${UserFollowStroke12Icon} />
        <${IconCopyButton}>UserFollowStroke12Icon<//>
        <${UserGroupStroke12Icon} />
        <${IconCopyButton}>UserGroupStroke12Icon<//>
        <${UserListStroke12Icon} />
        <${IconCopyButton}>UserListStroke12Icon<//>
        <${UserSoloStroke12Icon} />
        <${IconCopyButton}>UserSoloStroke12Icon<//>
        <${UserUnfollowStroke12Icon} />
        <${IconCopyButton}>UserUnfollowStroke12Icon<//>
        <${VoicemailStroke12Icon} />
        <${IconCopyButton}>VoicemailStroke12Icon<//>
        <${VolumeMutedStroke12Icon} />
        <${IconCopyButton}>VolumeMutedStroke12Icon<//>
        <${VolumeUnmutedStroke12Icon} />
        <${IconCopyButton}>VolumeUnmutedStroke12Icon<//>
        <${WechatStroke12Icon} />
        <${IconCopyButton}>WechatStroke12Icon<//>
        <${WhatsappStroke12Icon} />
        <${IconCopyButton}>WhatsappStroke12Icon<//>
        <${WrapLeftStroke12Icon} />
        <${IconCopyButton}>WrapLeftStroke12Icon<//>
        <${WrapRightStroke12Icon} />
        <${IconCopyButton}>WrapRightStroke12Icon<//>
        <${XCircleStroke12Icon} />
        <${IconCopyButton}>XCircleStroke12Icon<//>
        <${XStroke12Icon} />
        <${IconCopyButton}>XStroke12Icon<//>
        <${ZendeskStroke12Icon} />
        <${IconCopyButton}>ZendeskStroke12Icon<//>
      </div>
      <${Heading} level="2">16px icons<//>
      <div class=${columnStyles}>
        <${Grip16Icon} />
        <${IconCopyButton}>Grip16Icon<//>
        <${Paperclip16Icon} />
        <${IconCopyButton}>Paperclip16Icon<//>
      </div>
      <${Heading} level="2">16px icons (fill)<//>
      <div class=${columnStyles}>
        <${I123Fill16Icon} />
        <${IconCopyButton}>I123Fill16Icon<//>
        <${AdjustFill16Icon} />
        <${IconCopyButton}>AdjustFill16Icon<//>
        <${AlertErrorFill16Icon} />
        <${IconCopyButton}>AlertErrorFill16Icon<//>
        <${AlertWarningFill16Icon} />
        <${IconCopyButton}>AlertWarningFill16Icon<//>
        <${AlignCenterFill16Icon} />
        <${IconCopyButton}>AlignCenterFill16Icon<//>
        <${AlignJustifyFill16Icon} />
        <${IconCopyButton}>AlignJustifyFill16Icon<//>
        <${AlignLeftFill16Icon} />
        <${IconCopyButton}>AlignLeftFill16Icon<//>
        <${AlignRightFill16Icon} />
        <${IconCopyButton}>AlignRightFill16Icon<//>
        <${AltTextFill16Icon} />
        <${IconCopyButton}>AltTextFill16Icon<//>
        <${ArrowLeftFill16Icon} />
        <${IconCopyButton}>ArrowLeftFill16Icon<//>
        <${ArrowLeftUpFill16Icon} />
        <${IconCopyButton}>ArrowLeftUpFill16Icon<//>
        <${ArrowRetweetFill16Icon} />
        <${IconCopyButton}>ArrowRetweetFill16Icon<//>
        <${ArrowReverseFill16Icon} />
        <${IconCopyButton}>ArrowReverseFill16Icon<//>
        <${ArrowTrendingFill16Icon} />
        <${IconCopyButton}>ArrowTrendingFill16Icon<//>
        <${AsteriskFill16Icon} />
        <${IconCopyButton}>AsteriskFill16Icon<//>
        <${AtFill16Icon} />
        <${IconCopyButton}>AtFill16Icon<//>
        <${BarChartFill16Icon} />
        <${IconCopyButton}>BarChartFill16Icon<//>
        <${BasketballFill16Icon} />
        <${IconCopyButton}>BasketballFill16Icon<//>
        <${BoldFill16Icon} />
        <${IconCopyButton}>BoldFill16Icon<//>
        <${BookClosedFill16Icon} />
        <${IconCopyButton}>BookClosedFill16Icon<//>
        <${BookOpenFill16Icon} />
        <${IconCopyButton}>BookOpenFill16Icon<//>
        <${Box3dFill16Icon} />
        <${IconCopyButton}>Box3dFill16Icon<//>
        <${BuildingFill16Icon} />
        <${IconCopyButton}>BuildingFill16Icon<//>
        <${CalendarFill16Icon} />
        <${IconCopyButton}>CalendarFill16Icon<//>
        <${CarFill16Icon} />
        <${IconCopyButton}>CarFill16Icon<//>
        <${CenterFill16Icon} />
        <${IconCopyButton}>CenterFill16Icon<//>
        <${CheckBadgeFill16Icon} />
        <${IconCopyButton}>CheckBadgeFill16Icon<//>
        <${CheckBoxDoubleFill16Icon} />
        <${IconCopyButton}>CheckBoxDoubleFill16Icon<//>
        <${CheckBoxFill16Icon} />
        <${IconCopyButton}>CheckBoxFill16Icon<//>
        <${CheckCircleFill16Icon} />
        <${IconCopyButton}>CheckCircleFill16Icon<//>
        <${CheckDoubleFill16Icon} />
        <${IconCopyButton}>CheckDoubleFill16Icon<//>
        <${CheckLgFill16Icon} />
        <${IconCopyButton}>CheckLgFill16Icon<//>
        <${CheckSmFill16Icon} />
        <${IconCopyButton}>CheckSmFill16Icon<//>
        <${ChevronBoxFill16Icon} />
        <${IconCopyButton}>ChevronBoxFill16Icon<//>
        <${ChevronDoubleDownFill16Icon} />
        <${IconCopyButton}>ChevronDoubleDownFill16Icon<//>
        <${ChevronDoubleLeftFill16Icon} />
        <${IconCopyButton}>ChevronDoubleLeftFill16Icon<//>
        <${ChevronDoubleRightFill16Icon} />
        <${IconCopyButton}>ChevronDoubleRightFill16Icon<//>
        <${ChevronDoubleUpFill16Icon} />
        <${IconCopyButton}>ChevronDoubleUpFill16Icon<//>
        <${ChevronDownFill16Icon} />
        <${IconCopyButton}>ChevronDownFill16Icon<//>
        <${ChevronLeftFill16Icon} />
        <${IconCopyButton}>ChevronLeftFill16Icon<//>
        <${ChevronRightFill16Icon} />
        <${IconCopyButton}>ChevronRightFill16Icon<//>
        <${ChevronUpFill16Icon} />
        <${IconCopyButton}>ChevronUpFill16Icon<//>
        <${CircleFill16Icon} />
        <${IconCopyButton}>CircleFill16Icon<//>
        <${CircleFullFill16Icon} />
        <${IconCopyButton}>CircleFullFill16Icon<//>
        <${CircleLineFill16Icon} />
        <${IconCopyButton}>CircleLineFill16Icon<//>
        <${CircleSmFill16Icon} />
        <${IconCopyButton}>CircleSmFill16Icon<//>
        <${ClipboardBlankFill16Icon} />
        <${IconCopyButton}>ClipboardBlankFill16Icon<//>
        <${ClipboardCheckFill16Icon} />
        <${IconCopyButton}>ClipboardCheckFill16Icon<//>
        <${ClipboardListFill16Icon} />
        <${IconCopyButton}>ClipboardListFill16Icon<//>
        <${ClockCycleFill16Icon} />
        <${IconCopyButton}>ClockCycleFill16Icon<//>
        <${ClockFill16Icon} />
        <${IconCopyButton}>ClockFill16Icon<//>
        <${ClockInFill16Icon} />
        <${IconCopyButton}>ClockInFill16Icon<//>
        <${ClockOutFill16Icon} />
        <${IconCopyButton}>ClockOutFill16Icon<//>
        <${CopyFill16Icon} />
        <${IconCopyButton}>CopyFill16Icon<//>
        <${CreditCardFill16Icon} />
        <${IconCopyButton}>CreditCardFill16Icon<//>
        <${CssFill16Icon} />
        <${IconCopyButton}>CssFill16Icon<//>
        <${CursorArrowFill16Icon} />
        <${IconCopyButton}>CursorArrowFill16Icon<//>
        <${CutleryFill16Icon} />
        <${IconCopyButton}>CutleryFill16Icon<//>
        <${DashFill16Icon} />
        <${IconCopyButton}>DashFill16Icon<//>
        <${DatabaseFill16Icon} />
        <${IconCopyButton}>DatabaseFill16Icon<//>
        <${DecimalFill16Icon} />
        <${IconCopyButton}>DecimalFill16Icon<//>
        <${DirectionLtrFill16Icon} />
        <${IconCopyButton}>DirectionLtrFill16Icon<//>
        <${DirectionRtlFill16Icon} />
        <${IconCopyButton}>DirectionRtlFill16Icon<//>
        <${DownloadFill16Icon} />
        <${IconCopyButton}>DownloadFill16Icon<//>
        <${DuplicateFill16Icon} />
        <${IconCopyButton}>DuplicateFill16Icon<//>
        <${EditRedoFill16Icon} />
        <${IconCopyButton}>EditRedoFill16Icon<//>
        <${EditUndoFill16Icon} />
        <${IconCopyButton}>EditUndoFill16Icon<//>
        <${EmailFill16Icon} />
        <${IconCopyButton}>EmailFill16Icon<//>
        <${EraserFill16Icon} />
        <${IconCopyButton}>EraserFill16Icon<//>
        <${ExitFill16Icon} />
        <${IconCopyButton}>ExitFill16Icon<//>
        <${EyeFill16Icon} />
        <${IconCopyButton}>EyeFill16Icon<//>
        <${FacebookFill16Icon} />
        <${IconCopyButton}>FacebookFill16Icon<//>
        <${FileDocumentFill16Icon} />
        <${IconCopyButton}>FileDocumentFill16Icon<//>
        <${FileErrorFill16Icon} />
        <${IconCopyButton}>FileErrorFill16Icon<//>
        <${FileGenericFill16Icon} />
        <${IconCopyButton}>FileGenericFill16Icon<//>
        <${FileImageFill16Icon} />
        <${IconCopyButton}>FileImageFill16Icon<//>
        <${FilePdfFill16Icon} />
        <${IconCopyButton}>FilePdfFill16Icon<//>
        <${FilePresentationFill16Icon} />
        <${IconCopyButton}>FilePresentationFill16Icon<//>
        <${FileSpreadsheetFill16Icon} />
        <${IconCopyButton}>FileSpreadsheetFill16Icon<//>
        <${FileZipFill16Icon} />
        <${IconCopyButton}>FileZipFill16Icon<//>
        <${FilterFill16Icon} />
        <${IconCopyButton}>FilterFill16Icon<//>
        <${FlagFill16Icon} />
        <${IconCopyButton}>FlagFill16Icon<//>
        <${FolderClosedFill16Icon} />
        <${IconCopyButton}>FolderClosedFill16Icon<//>
        <${FolderOpenFill16Icon} />
        <${IconCopyButton}>FolderOpenFill16Icon<//>
        <${FullWidthFill16Icon} />
        <${IconCopyButton}>FullWidthFill16Icon<//>
        <${GearFill16Icon} />
        <${IconCopyButton}>GearFill16Icon<//>
        <${GithubFill16Icon} />
        <${IconCopyButton}>GithubFill16Icon<//>
        <${GlobeFill16Icon} />
        <${IconCopyButton}>GlobeFill16Icon<//>
        <${Grid2x2Fill16Icon} />
        <${IconCopyButton}>Grid2x2Fill16Icon<//>
        <${Grid3x3Fill16Icon} />
        <${IconCopyButton}>Grid3x3Fill16Icon<//>
        <${HeadingFill16Icon} />
        <${IconCopyButton}>HeadingFill16Icon<//>
        <${HeartFill16Icon} />
        <${IconCopyButton}>HeartFill16Icon<//>
        <${HistoryFill16Icon} />
        <${IconCopyButton}>HistoryFill16Icon<//>
        <${HomeFill16Icon} />
        <${IconCopyButton}>HomeFill16Icon<//>
        <${HorizontalRuleFill16Icon} />
        <${IconCopyButton}>HorizontalRuleFill16Icon<//>
        <${ImageFill16Icon} />
        <${IconCopyButton}>ImageFill16Icon<//>
        <${InboxFill16Icon} />
        <${IconCopyButton}>InboxFill16Icon<//>
        <${IndentDecreaseFill16Icon} />
        <${IconCopyButton}>IndentDecreaseFill16Icon<//>
        <${IndentIncreaseFill16Icon} />
        <${IconCopyButton}>IndentIncreaseFill16Icon<//>
        <${InfoFill16Icon} />
        <${IconCopyButton}>InfoFill16Icon<//>
        <${InterlockingRingsFill16Icon} />
        <${IconCopyButton}>InterlockingRingsFill16Icon<//>
        <${ItalicFill16Icon} />
        <${IconCopyButton}>ItalicFill16Icon<//>
        <${LeafFill16Icon} />
        <${IconCopyButton}>LeafFill16Icon<//>
        <${LifesaverFill16Icon} />
        <${IconCopyButton}>LifesaverFill16Icon<//>
        <${LightbulbFill16Icon} />
        <${IconCopyButton}>LightbulbFill16Icon<//>
        <${LightningBoltFill16Icon} />
        <${IconCopyButton}>LightningBoltFill16Icon<//>
        <${LineGraphFill16Icon} />
        <${IconCopyButton}>LineGraphFill16Icon<//>
        <${LineSocialFill16Icon} />
        <${IconCopyButton}>LineSocialFill16Icon<//>
        <${LinkFill16Icon} />
        <${IconCopyButton}>LinkFill16Icon<//>
        <${LinkRemoveFill16Icon} />
        <${IconCopyButton}>LinkRemoveFill16Icon<//>
        <${LinkedinFill16Icon} />
        <${IconCopyButton}>LinkedinFill16Icon<//>
        <${ListBulletFill16Icon} />
        <${IconCopyButton}>ListBulletFill16Icon<//>
        <${ListNumberFill16Icon} />
        <${IconCopyButton}>ListNumberFill16Icon<//>
        <${ListNumberRtlFill16Icon} />
        <${IconCopyButton}>ListNumberRtlFill16Icon<//>
        <${LocationFill16Icon} />
        <${IconCopyButton}>LocationFill16Icon<//>
        <${LockLockedFill16Icon} />
        <${IconCopyButton}>LockLockedFill16Icon<//>
        <${LockUnlockedFill16Icon} />
        <${IconCopyButton}>LockUnlockedFill16Icon<//>
        <${MarkupFill16Icon} />
        <${IconCopyButton}>MarkupFill16Icon<//>
        <${MaximizeFill16Icon} />
        <${IconCopyButton}>MaximizeFill16Icon<//>
        <${MegaphoneFill16Icon} />
        <${IconCopyButton}>MegaphoneFill16Icon<//>
        <${MenuFill16Icon} />
        <${IconCopyButton}>MenuFill16Icon<//>
        <${MessengerFill16Icon} />
        <${IconCopyButton}>MessengerFill16Icon<//>
        <${MicrophoneOffFill16Icon} />
        <${IconCopyButton}>MicrophoneOffFill16Icon<//>
        <${MicrophoneOnFill16Icon} />
        <${IconCopyButton}>MicrophoneOnFill16Icon<//>
        <${MinimizeFill16Icon} />
        <${IconCopyButton}>MinimizeFill16Icon<//>
        <${MobilePhoneFill16Icon} />
        <${IconCopyButton}>MobilePhoneFill16Icon<//>
        <${MonitorFill16Icon} />
        <${IconCopyButton}>MonitorFill16Icon<//>
        <${MultilineFill16Icon} />
        <${IconCopyButton}>MultilineFill16Icon<//>
        <${NewWindowFill16Icon} />
        <${IconCopyButton}>NewWindowFill16Icon<//>
        <${NotesFill16Icon} />
        <${IconCopyButton}>NotesFill16Icon<//>
        <${NotificationFill16Icon} />
        <${IconCopyButton}>NotificationFill16Icon<//>
        <${NumberFill16Icon} />
        <${IconCopyButton}>NumberFill16Icon<//>
        <${OriginalSizeFill16Icon} />
        <${IconCopyButton}>OriginalSizeFill16Icon<//>
        <${OverflowFill16Icon} />
        <${IconCopyButton}>OverflowFill16Icon<//>
        <${OverflowVerticalFill16Icon} />
        <${IconCopyButton}>OverflowVerticalFill16Icon<//>
        <${PaletteFill16Icon} />
        <${IconCopyButton}>PaletteFill16Icon<//>
        <${PanelsFill16Icon} />
        <${IconCopyButton}>PanelsFill16Icon<//>
        <${PauseFill16Icon} />
        <${IconCopyButton}>PauseFill16Icon<//>
        <${PencilFill16Icon} />
        <${IconCopyButton}>PencilFill16Icon<//>
        <${PhoneCallEndFill16Icon} />
        <${IconCopyButton}>PhoneCallEndFill16Icon<//>
        <${PhoneCallInFill16Icon} />
        <${IconCopyButton}>PhoneCallInFill16Icon<//>
        <${PhoneCallOutFill16Icon} />
        <${IconCopyButton}>PhoneCallOutFill16Icon<//>
        <${PhoneCallPauseFill16Icon} />
        <${IconCopyButton}>PhoneCallPauseFill16Icon<//>
        <${PhoneCallSpeakerFill16Icon} />
        <${IconCopyButton}>PhoneCallSpeakerFill16Icon<//>
        <${PhoneCallTransferFill16Icon} />
        <${IconCopyButton}>PhoneCallTransferFill16Icon<//>
        <${PhoneFill16Icon} />
        <${IconCopyButton}>PhoneFill16Icon<//>
        <${PlayCircleFill16Icon} />
        <${IconCopyButton}>PlayCircleFill16Icon<//>
        <${PlayFill16Icon} />
        <${IconCopyButton}>PlayFill16Icon<//>
        <${PlugFill16Icon} />
        <${IconCopyButton}>PlugFill16Icon<//>
        <${PlusCircleFill16Icon} />
        <${IconCopyButton}>PlusCircleFill16Icon<//>
        <${PlusFill16Icon} />
        <${IconCopyButton}>PlusFill16Icon<//>
        <${PuzzlePieceFill16Icon} />
        <${IconCopyButton}>PuzzlePieceFill16Icon<//>
        <${QuestionMarkFill16Icon} />
        <${IconCopyButton}>QuestionMarkFill16Icon<//>
        <${QuoteFill16Icon} />
        <${IconCopyButton}>QuoteFill16Icon<//>
        <${RearrangeFill16Icon} />
        <${IconCopyButton}>RearrangeFill16Icon<//>
        <${RecordFill16Icon} />
        <${IconCopyButton}>RecordFill16Icon<//>
        <${ReloadFill16Icon} />
        <${IconCopyButton}>ReloadFill16Icon<//>
        <${SearchFill16Icon} />
        <${IconCopyButton}>SearchFill16Icon<//>
        <${ShapesFill16Icon} />
        <${IconCopyButton}>ShapesFill16Icon<//>
        <${ShareFill16Icon} />
        <${IconCopyButton}>ShareFill16Icon<//>
        <${ShieldFill16Icon} />
        <${IconCopyButton}>ShieldFill16Icon<//>
        <${ShoppingCartFill16Icon} />
        <${IconCopyButton}>ShoppingCartFill16Icon<//>
        <${SignpostFill16Icon} />
        <${IconCopyButton}>SignpostFill16Icon<//>
        <${SlackFill16Icon} />
        <${IconCopyButton}>SlackFill16Icon<//>
        <${SmileSlightFill16Icon} />
        <${IconCopyButton}>SmileSlightFill16Icon<//>
        <${SmileyFill16Icon} />
        <${IconCopyButton}>SmileyFill16Icon<//>
        <${SortFill16Icon} />
        <${IconCopyButton}>SortFill16Icon<//>
        <${SpeechBubbleConversationFill16Icon} />
        <${IconCopyButton}>SpeechBubbleConversationFill16Icon<//>
        <${SpeechBubbleLightningBoltFill16Icon} />
        <${IconCopyButton}>SpeechBubbleLightningBoltFill16Icon<//>
        <${SpeechBubblePlainFill16Icon} />
        <${IconCopyButton}>SpeechBubblePlainFill16Icon<//>
        <${StarFill16Icon} />
        <${IconCopyButton}>StarFill16Icon<//>
        <${TableFill16Icon} />
        <${IconCopyButton}>TableFill16Icon<//>
        <${TagFill16Icon} />
        <${IconCopyButton}>TagFill16Icon<//>
        <${TerminalCliFill16Icon} />
        <${IconCopyButton}>TerminalCliFill16Icon<//>
        <${TerminalWindowFill16Icon} />
        <${IconCopyButton}>TerminalWindowFill16Icon<//>
        <${TextColorFill16Icon} />
        <${IconCopyButton}>TextColorFill16Icon<//>
        <${TextFill16Icon} />
        <${IconCopyButton}>TextFill16Icon<//>
        <${ThumbsDownFill16Icon} />
        <${IconCopyButton}>ThumbsDownFill16Icon<//>
        <${ThumbsUpFill16Icon} />
        <${IconCopyButton}>ThumbsUpFill16Icon<//>
        <${TranslationCreatedFill16Icon} />
        <${IconCopyButton}>TranslationCreatedFill16Icon<//>
        <${TranslationDeletedFill16Icon} />
        <${IconCopyButton}>TranslationDeletedFill16Icon<//>
        <${TranslationExistsFill16Icon} />
        <${IconCopyButton}>TranslationExistsFill16Icon<//>
        <${TranslationOutdatedFill16Icon} />
        <${IconCopyButton}>TranslationOutdatedFill16Icon<//>
        <${TranslationUpdatedFill16Icon} />
        <${IconCopyButton}>TranslationUpdatedFill16Icon<//>
        <${TrashFill16Icon} />
        <${IconCopyButton}>TrashFill16Icon<//>
        <${TwitterFill16Icon} />
        <${IconCopyButton}>TwitterFill16Icon<//>
        <${UnderlineFill16Icon} />
        <${IconCopyButton}>UnderlineFill16Icon<//>
        <${UploadFill16Icon} />
        <${IconCopyButton}>UploadFill16Icon<//>
        <${UserCircleFill16Icon} />
        <${IconCopyButton}>UserCircleFill16Icon<//>
        <${UserFollowFill16Icon} />
        <${IconCopyButton}>UserFollowFill16Icon<//>
        <${UserGroupFill16Icon} />
        <${IconCopyButton}>UserGroupFill16Icon<//>
        <${UserListFill16Icon} />
        <${IconCopyButton}>UserListFill16Icon<//>
        <${UserSoloFill16Icon} />
        <${IconCopyButton}>UserSoloFill16Icon<//>
        <${UserUnfollowFill16Icon} />
        <${IconCopyButton}>UserUnfollowFill16Icon<//>
        <${VoicemailFill16Icon} />
        <${IconCopyButton}>VoicemailFill16Icon<//>
        <${VolumeMutedFill16Icon} />
        <${IconCopyButton}>VolumeMutedFill16Icon<//>
        <${VolumeUnmutedFill16Icon} />
        <${IconCopyButton}>VolumeUnmutedFill16Icon<//>
        <${WechatFill16Icon} />
        <${IconCopyButton}>WechatFill16Icon<//>
        <${WhatsappFill16Icon} />
        <${IconCopyButton}>WhatsappFill16Icon<//>
        <${WrapLeftFill16Icon} />
        <${IconCopyButton}>WrapLeftFill16Icon<//>
        <${WrapRightFill16Icon} />
        <${IconCopyButton}>WrapRightFill16Icon<//>
        <${XCircleFill16Icon} />
        <${IconCopyButton}>XCircleFill16Icon<//>
        <${XFill16Icon} />
        <${IconCopyButton}>XFill16Icon<//>
        <${ZendeskFill16Icon} />
        <${IconCopyButton}>ZendeskFill16Icon<//>
      </div>
      <${Heading} level="2">16px icons (stroke)<//>
      <div class=${columnStyles}>
        <${I123Stroke16Icon} />
        <${IconCopyButton}>I123Stroke16Icon<//>
        <${AdjustStroke16Icon} />
        <${IconCopyButton}>AdjustStroke16Icon<//>
        <${AlertErrorStroke16Icon} />
        <${IconCopyButton}>AlertErrorStroke16Icon<//>
        <${AlertWarningStroke16Icon} />
        <${IconCopyButton}>AlertWarningStroke16Icon<//>
        <${AlignCenterStroke16Icon} />
        <${IconCopyButton}>AlignCenterStroke16Icon<//>
        <${AlignJustifyStroke16Icon} />
        <${IconCopyButton}>AlignJustifyStroke16Icon<//>
        <${AlignLeftStroke16Icon} />
        <${IconCopyButton}>AlignLeftStroke16Icon<//>
        <${AlignRightStroke16Icon} />
        <${IconCopyButton}>AlignRightStroke16Icon<//>
        <${AltTextStroke16Icon} />
        <${IconCopyButton}>AltTextStroke16Icon<//>
        <${ArrowLeftStroke16Icon} />
        <${IconCopyButton}>ArrowLeftStroke16Icon<//>
        <${ArrowLeftUpStroke16Icon} />
        <${IconCopyButton}>ArrowLeftUpStroke16Icon<//>
        <${ArrowRetweetStroke16Icon} />
        <${IconCopyButton}>ArrowRetweetStroke16Icon<//>
        <${ArrowReverseStroke16Icon} />
        <${IconCopyButton}>ArrowReverseStroke16Icon<//>
        <${ArrowTrendingStroke16Icon} />
        <${IconCopyButton}>ArrowTrendingStroke16Icon<//>
        <${AsteriskStroke16Icon} />
        <${IconCopyButton}>AsteriskStroke16Icon<//>
        <${AtStroke16Icon} />
        <${IconCopyButton}>AtStroke16Icon<//>
        <${BarChartStroke16Icon} />
        <${IconCopyButton}>BarChartStroke16Icon<//>
        <${BasketballStroke16Icon} />
        <${IconCopyButton}>BasketballStroke16Icon<//>
        <${BoldStroke16Icon} />
        <${IconCopyButton}>BoldStroke16Icon<//>
        <${BookClosedStroke16Icon} />
        <${IconCopyButton}>BookClosedStroke16Icon<//>
        <${BookOpenStroke16Icon} />
        <${IconCopyButton}>BookOpenStroke16Icon<//>
        <${Box3dStroke16Icon} />
        <${IconCopyButton}>Box3dStroke16Icon<//>
        <${BuildingStroke16Icon} />
        <${IconCopyButton}>BuildingStroke16Icon<//>
        <${CalendarStroke16Icon} />
        <${IconCopyButton}>CalendarStroke16Icon<//>
        <${CarStroke16Icon} />
        <${IconCopyButton}>CarStroke16Icon<//>
        <${CenterStroke16Icon} />
        <${IconCopyButton}>CenterStroke16Icon<//>
        <${CheckBadgeStroke16Icon} />
        <${IconCopyButton}>CheckBadgeStroke16Icon<//>
        <${CheckBoxDoubleStroke16Icon} />
        <${IconCopyButton}>CheckBoxDoubleStroke16Icon<//>
        <${CheckBoxStroke16Icon} />
        <${IconCopyButton}>CheckBoxStroke16Icon<//>
        <${CheckCircleStroke16Icon} />
        <${IconCopyButton}>CheckCircleStroke16Icon<//>
        <${CheckDoubleStroke16Icon} />
        <${IconCopyButton}>CheckDoubleStroke16Icon<//>
        <${CheckLgStroke16Icon} />
        <${IconCopyButton}>CheckLgStroke16Icon<//>
        <${CheckSmStroke16Icon} />
        <${IconCopyButton}>CheckSmStroke16Icon<//>
        <${ChevronBoxStroke16Icon} />
        <${IconCopyButton}>ChevronBoxStroke16Icon<//>
        <${ChevronDoubleDownStroke16Icon} />
        <${IconCopyButton}>ChevronDoubleDownStroke16Icon<//>
        <${ChevronDoubleLeftStroke16Icon} />
        <${IconCopyButton}>ChevronDoubleLeftStroke16Icon<//>
        <${ChevronDoubleRightStroke16Icon} />
        <${IconCopyButton}>ChevronDoubleRightStroke16Icon<//>
        <${ChevronDoubleUpStroke16Icon} />
        <${IconCopyButton}>ChevronDoubleUpStroke16Icon<//>
        <${ChevronDownStroke16Icon} />
        <${IconCopyButton}>ChevronDownStroke16Icon<//>
        <${ChevronLeftStroke16Icon} />
        <${IconCopyButton}>ChevronLeftStroke16Icon<//>
        <${ChevronRightStroke16Icon} />
        <${IconCopyButton}>ChevronRightStroke16Icon<//>
        <${ChevronUpStroke16Icon} />
        <${IconCopyButton}>ChevronUpStroke16Icon<//>
        <${CircleFullStroke16Icon} />
        <${IconCopyButton}>CircleFullStroke16Icon<//>
        <${CircleLineStroke16Icon} />
        <${IconCopyButton}>CircleLineStroke16Icon<//>
        <${CircleSmStroke16Icon} />
        <${IconCopyButton}>CircleSmStroke16Icon<//>
        <${CircleStroke16Icon} />
        <${IconCopyButton}>CircleStroke16Icon<//>
        <${ClipboardBlankStroke16Icon} />
        <${IconCopyButton}>ClipboardBlankStroke16Icon<//>
        <${ClipboardCheckStroke16Icon} />
        <${IconCopyButton}>ClipboardCheckStroke16Icon<//>
        <${ClipboardListStroke16Icon} />
        <${IconCopyButton}>ClipboardListStroke16Icon<//>
        <${ClockCycleStroke16Icon} />
        <${IconCopyButton}>ClockCycleStroke16Icon<//>
        <${ClockInStroke16Icon} />
        <${IconCopyButton}>ClockInStroke16Icon<//>
        <${ClockOutStroke16Icon} />
        <${IconCopyButton}>ClockOutStroke16Icon<//>
        <${ClockStroke16Icon} />
        <${IconCopyButton}>ClockStroke16Icon<//>
        <${CopyStroke16Icon} />
        <${IconCopyButton}>CopyStroke16Icon<//>
        <${CreditCardStroke16Icon} />
        <${IconCopyButton}>CreditCardStroke16Icon<//>
        <${CssStroke16Icon} />
        <${IconCopyButton}>CssStroke16Icon<//>
        <${CursorArrowStroke16Icon} />
        <${IconCopyButton}>CursorArrowStroke16Icon<//>
        <${CutleryStroke16Icon} />
        <${IconCopyButton}>CutleryStroke16Icon<//>
        <${DashStroke16Icon} />
        <${IconCopyButton}>DashStroke16Icon<//>
        <${DatabaseStroke16Icon} />
        <${IconCopyButton}>DatabaseStroke16Icon<//>
        <${DecimalStroke16Icon} />
        <${IconCopyButton}>DecimalStroke16Icon<//>
        <${DirectionLtrStroke16Icon} />
        <${IconCopyButton}>DirectionLtrStroke16Icon<//>
        <${DirectionRtlStroke16Icon} />
        <${IconCopyButton}>DirectionRtlStroke16Icon<//>
        <${DownloadStroke16Icon} />
        <${IconCopyButton}>DownloadStroke16Icon<//>
        <${DuplicateStroke16Icon} />
        <${IconCopyButton}>DuplicateStroke16Icon<//>
        <${EditRedoStroke16Icon} />
        <${IconCopyButton}>EditRedoStroke16Icon<//>
        <${EditUndoStroke16Icon} />
        <${IconCopyButton}>EditUndoStroke16Icon<//>
        <${EmailStroke16Icon} />
        <${IconCopyButton}>EmailStroke16Icon<//>
        <${EraserStroke16Icon} />
        <${IconCopyButton}>EraserStroke16Icon<//>
        <${ExitStroke16Icon} />
        <${IconCopyButton}>ExitStroke16Icon<//>
        <${EyeStroke16Icon} />
        <${IconCopyButton}>EyeStroke16Icon<//>
        <${FacebookStroke16Icon} />
        <${IconCopyButton}>FacebookStroke16Icon<//>
        <${FileDocumentStroke16Icon} />
        <${IconCopyButton}>FileDocumentStroke16Icon<//>
        <${FileErrorStroke16Icon} />
        <${IconCopyButton}>FileErrorStroke16Icon<//>
        <${FileGenericStroke16Icon} />
        <${IconCopyButton}>FileGenericStroke16Icon<//>
        <${FileImageStroke16Icon} />
        <${IconCopyButton}>FileImageStroke16Icon<//>
        <${FilePdfStroke16Icon} />
        <${IconCopyButton}>FilePdfStroke16Icon<//>
        <${FilePresentationStroke16Icon} />
        <${IconCopyButton}>FilePresentationStroke16Icon<//>
        <${FileSpreadsheetStroke16Icon} />
        <${IconCopyButton}>FileSpreadsheetStroke16Icon<//>
        <${FileZipStroke16Icon} />
        <${IconCopyButton}>FileZipStroke16Icon<//>
        <${FilterStroke16Icon} />
        <${IconCopyButton}>FilterStroke16Icon<//>
        <${FlagStroke16Icon} />
        <${IconCopyButton}>FlagStroke16Icon<//>
        <${FolderClosedStroke16Icon} />
        <${IconCopyButton}>FolderClosedStroke16Icon<//>
        <${FolderOpenStroke16Icon} />
        <${IconCopyButton}>FolderOpenStroke16Icon<//>
        <${FullWidthStroke16Icon} />
        <${IconCopyButton}>FullWidthStroke16Icon<//>
        <${GearStroke16Icon} />
        <${IconCopyButton}>GearStroke16Icon<//>
        <${GithubStroke16Icon} />
        <${IconCopyButton}>GithubStroke16Icon<//>
        <${GlobeStroke16Icon} />
        <${IconCopyButton}>GlobeStroke16Icon<//>
        <${Grid2x2Stroke16Icon} />
        <${IconCopyButton}>Grid2x2Stroke16Icon<//>
        <${Grid3x3Stroke16Icon} />
        <${IconCopyButton}>Grid3x3Stroke16Icon<//>
        <${HeadingStroke16Icon} />
        <${IconCopyButton}>HeadingStroke16Icon<//>
        <${HeartStroke16Icon} />
        <${IconCopyButton}>HeartStroke16Icon<//>
        <${HistoryStroke16Icon} />
        <${IconCopyButton}>HistoryStroke16Icon<//>
        <${HomeStroke16Icon} />
        <${IconCopyButton}>HomeStroke16Icon<//>
        <${HorizontalRuleStroke16Icon} />
        <${IconCopyButton}>HorizontalRuleStroke16Icon<//>
        <${ImageStroke16Icon} />
        <${IconCopyButton}>ImageStroke16Icon<//>
        <${InboxStroke16Icon} />
        <${IconCopyButton}>InboxStroke16Icon<//>
        <${IndentDecreaseStroke16Icon} />
        <${IconCopyButton}>IndentDecreaseStroke16Icon<//>
        <${IndentIncreaseStroke16Icon} />
        <${IconCopyButton}>IndentIncreaseStroke16Icon<//>
        <${InfoStroke16Icon} />
        <${IconCopyButton}>InfoStroke16Icon<//>
        <${InterlockingRingsStroke16Icon} />
        <${IconCopyButton}>InterlockingRingsStroke16Icon<//>
        <${ItalicStroke16Icon} />
        <${IconCopyButton}>ItalicStroke16Icon<//>
        <${LeafStroke16Icon} />
        <${IconCopyButton}>LeafStroke16Icon<//>
        <${LifesaverStroke16Icon} />
        <${IconCopyButton}>LifesaverStroke16Icon<//>
        <${LightbulbStroke16Icon} />
        <${IconCopyButton}>LightbulbStroke16Icon<//>
        <${LightningBoltStroke16Icon} />
        <${IconCopyButton}>LightningBoltStroke16Icon<//>
        <${LineGraphStroke16Icon} />
        <${IconCopyButton}>LineGraphStroke16Icon<//>
        <${LineSocialStroke16Icon} />
        <${IconCopyButton}>LineSocialStroke16Icon<//>
        <${LinkRemoveStroke16Icon} />
        <${IconCopyButton}>LinkRemoveStroke16Icon<//>
        <${LinkStroke16Icon} />
        <${IconCopyButton}>LinkStroke16Icon<//>
        <${LinkedinStroke16Icon} />
        <${IconCopyButton}>LinkedinStroke16Icon<//>
        <${ListBulletStroke16Icon} />
        <${IconCopyButton}>ListBulletStroke16Icon<//>
        <${ListNumberRtlStroke16Icon} />
        <${IconCopyButton}>ListNumberRtlStroke16Icon<//>
        <${ListNumberStroke16Icon} />
        <${IconCopyButton}>ListNumberStroke16Icon<//>
        <${LocationStroke16Icon} />
        <${IconCopyButton}>LocationStroke16Icon<//>
        <${LockLockedStroke16Icon} />
        <${IconCopyButton}>LockLockedStroke16Icon<//>
        <${LockUnlockedStroke16Icon} />
        <${IconCopyButton}>LockUnlockedStroke16Icon<//>
        <${MarkupStroke16Icon} />
        <${IconCopyButton}>MarkupStroke16Icon<//>
        <${MaximizeStroke16Icon} />
        <${IconCopyButton}>MaximizeStroke16Icon<//>
        <${MegaphoneStroke16Icon} />
        <${IconCopyButton}>MegaphoneStroke16Icon<//>
        <${MenuStroke16Icon} />
        <${IconCopyButton}>MenuStroke16Icon<//>
        <${MessengerStroke16Icon} />
        <${IconCopyButton}>MessengerStroke16Icon<//>
        <${MicrophoneOffStroke16Icon} />
        <${IconCopyButton}>MicrophoneOffStroke16Icon<//>
        <${MicrophoneOnStroke16Icon} />
        <${IconCopyButton}>MicrophoneOnStroke16Icon<//>
        <${MinimizeStroke16Icon} />
        <${IconCopyButton}>MinimizeStroke16Icon<//>
        <${MobilePhoneStroke16Icon} />
        <${IconCopyButton}>MobilePhoneStroke16Icon<//>
        <${MonitorStroke16Icon} />
        <${IconCopyButton}>MonitorStroke16Icon<//>
        <${MultilineStroke16Icon} />
        <${IconCopyButton}>MultilineStroke16Icon<//>
        <${NewWindowStroke16Icon} />
        <${IconCopyButton}>NewWindowStroke16Icon<//>
        <${NotesStroke16Icon} />
        <${IconCopyButton}>NotesStroke16Icon<//>
        <${NotificationStroke16Icon} />
        <${IconCopyButton}>NotificationStroke16Icon<//>
        <${NumberStroke16Icon} />
        <${IconCopyButton}>NumberStroke16Icon<//>
        <${OriginalSizeStroke16Icon} />
        <${IconCopyButton}>OriginalSizeStroke16Icon<//>
        <${OverflowStroke16Icon} />
        <${IconCopyButton}>OverflowStroke16Icon<//>
        <${OverflowVerticalStroke16Icon} />
        <${IconCopyButton}>OverflowVerticalStroke16Icon<//>
        <${PaletteStroke16Icon} />
        <${IconCopyButton}>PaletteStroke16Icon<//>
        <${PanelsStroke16Icon} />
        <${IconCopyButton}>PanelsStroke16Icon<//>
        <${PauseStroke16Icon} />
        <${IconCopyButton}>PauseStroke16Icon<//>
        <${PencilStroke16Icon} />
        <${IconCopyButton}>PencilStroke16Icon<//>
        <${PhoneCallEndStroke16Icon} />
        <${IconCopyButton}>PhoneCallEndStroke16Icon<//>
        <${PhoneCallInStroke16Icon} />
        <${IconCopyButton}>PhoneCallInStroke16Icon<//>
        <${PhoneCallOutStroke16Icon} />
        <${IconCopyButton}>PhoneCallOutStroke16Icon<//>
        <${PhoneCallPauseStroke16Icon} />
        <${IconCopyButton}>PhoneCallPauseStroke16Icon<//>
        <${PhoneCallSpeakerStroke16Icon} />
        <${IconCopyButton}>PhoneCallSpeakerStroke16Icon<//>
        <${PhoneCallTransferStroke16Icon} />
        <${IconCopyButton}>PhoneCallTransferStroke16Icon<//>
        <${PhoneStroke16Icon} />
        <${IconCopyButton}>PhoneStroke16Icon<//>
        <${PlayCircleStroke16Icon} />
        <${IconCopyButton}>PlayCircleStroke16Icon<//>
        <${PlayStroke16Icon} />
        <${IconCopyButton}>PlayStroke16Icon<//>
        <${PlugStroke16Icon} />
        <${IconCopyButton}>PlugStroke16Icon<//>
        <${PlusCircleStroke16Icon} />
        <${IconCopyButton}>PlusCircleStroke16Icon<//>
        <${PlusStroke16Icon} />
        <${IconCopyButton}>PlusStroke16Icon<//>
        <${PuzzlePieceStroke16Icon} />
        <${IconCopyButton}>PuzzlePieceStroke16Icon<//>
        <${QuestionMarkStroke16Icon} />
        <${IconCopyButton}>QuestionMarkStroke16Icon<//>
        <${QuoteStroke16Icon} />
        <${IconCopyButton}>QuoteStroke16Icon<//>
        <${RearrangeStroke16Icon} />
        <${IconCopyButton}>RearrangeStroke16Icon<//>
        <${RecordStroke16Icon} />
        <${IconCopyButton}>RecordStroke16Icon<//>
        <${ReloadStroke16Icon} />
        <${IconCopyButton}>ReloadStroke16Icon<//>
        <${SearchStroke16Icon} />
        <${IconCopyButton}>SearchStroke16Icon<//>
        <${ShapesStroke16Icon} />
        <${IconCopyButton}>ShapesStroke16Icon<//>
        <${ShareStroke16Icon} />
        <${IconCopyButton}>ShareStroke16Icon<//>
        <${ShieldStroke16Icon} />
        <${IconCopyButton}>ShieldStroke16Icon<//>
        <${ShoppingCartStroke16Icon} />
        <${IconCopyButton}>ShoppingCartStroke16Icon<//>
        <${SignpostStroke16Icon} />
        <${IconCopyButton}>SignpostStroke16Icon<//>
        <${SlackStroke16Icon} />
        <${IconCopyButton}>SlackStroke16Icon<//>
        <${SmileSlightStroke16Icon} />
        <${IconCopyButton}>SmileSlightStroke16Icon<//>
        <${SmileyStroke16Icon} />
        <${IconCopyButton}>SmileyStroke16Icon<//>
        <${SortStroke16Icon} />
        <${IconCopyButton}>SortStroke16Icon<//>
        <${SpeechBubbleConversationStroke16Icon} />
        <${IconCopyButton}>SpeechBubbleConversationStroke16Icon<//>
        <${SpeechBubbleLightningBoltStroke16Icon} />
        <${IconCopyButton}>SpeechBubbleLightningBoltStroke16Icon<//>
        <${SpeechBubblePlainStroke16Icon} />
        <${IconCopyButton}>SpeechBubblePlainStroke16Icon<//>
        <${StarStroke16Icon} />
        <${IconCopyButton}>StarStroke16Icon<//>
        <${TableStroke16Icon} />
        <${IconCopyButton}>TableStroke16Icon<//>
        <${TagStroke16Icon} />
        <${IconCopyButton}>TagStroke16Icon<//>
        <${TerminalCliStroke16Icon} />
        <${IconCopyButton}>TerminalCliStroke16Icon<//>
        <${TerminalWindowStroke16Icon} />
        <${IconCopyButton}>TerminalWindowStroke16Icon<//>
        <${TextColorStroke16Icon} />
        <${IconCopyButton}>TextColorStroke16Icon<//>
        <${TextStroke16Icon} />
        <${IconCopyButton}>TextStroke16Icon<//>
        <${ThumbsDownStroke16Icon} />
        <${IconCopyButton}>ThumbsDownStroke16Icon<//>
        <${ThumbsUpStroke16Icon} />
        <${IconCopyButton}>ThumbsUpStroke16Icon<//>
        <${TranslationCreatedStroke16Icon} />
        <${IconCopyButton}>TranslationCreatedStroke16Icon<//>
        <${TranslationDeletedStroke16Icon} />
        <${IconCopyButton}>TranslationDeletedStroke16Icon<//>
        <${TranslationExistsStroke16Icon} />
        <${IconCopyButton}>TranslationExistsStroke16Icon<//>
        <${TranslationOutdatedStroke16Icon} />
        <${IconCopyButton}>TranslationOutdatedStroke16Icon<//>
        <${TranslationUpdatedStroke16Icon} />
        <${IconCopyButton}>TranslationUpdatedStroke16Icon<//>
        <${TrashStroke16Icon} />
        <${IconCopyButton}>TrashStroke16Icon<//>
        <${TwitterStroke16Icon} />
        <${IconCopyButton}>TwitterStroke16Icon<//>
        <${UnderlineStroke16Icon} />
        <${IconCopyButton}>UnderlineStroke16Icon<//>
        <${UploadStroke16Icon} />
        <${IconCopyButton}>UploadStroke16Icon<//>
        <${UserCircleStroke16Icon} />
        <${IconCopyButton}>UserCircleStroke16Icon<//>
        <${UserFollowStroke16Icon} />
        <${IconCopyButton}>UserFollowStroke16Icon<//>
        <${UserGroupStroke16Icon} />
        <${IconCopyButton}>UserGroupStroke16Icon<//>
        <${UserListStroke16Icon} />
        <${IconCopyButton}>UserListStroke16Icon<//>
        <${UserSoloStroke16Icon} />
        <${IconCopyButton}>UserSoloStroke16Icon<//>
        <${UserUnfollowStroke16Icon} />
        <${IconCopyButton}>UserUnfollowStroke16Icon<//>
        <${VoicemailStroke16Icon} />
        <${IconCopyButton}>VoicemailStroke16Icon<//>
        <${VolumeMutedStroke16Icon} />
        <${IconCopyButton}>VolumeMutedStroke16Icon<//>
        <${VolumeUnmutedStroke16Icon} />
        <${IconCopyButton}>VolumeUnmutedStroke16Icon<//>
        <${WechatStroke16Icon} />
        <${IconCopyButton}>WechatStroke16Icon<//>
        <${WhatsappStroke16Icon} />
        <${IconCopyButton}>WhatsappStroke16Icon<//>
        <${WrapLeftStroke16Icon} />
        <${IconCopyButton}>WrapLeftStroke16Icon<//>
        <${WrapRightStroke16Icon} />
        <${IconCopyButton}>WrapRightStroke16Icon<//>
        <${XCircleStroke16Icon} />
        <${IconCopyButton}>XCircleStroke16Icon<//>
        <${XStroke16Icon} />
        <${IconCopyButton}>XStroke16Icon<//>
        <${ZendeskStroke16Icon} />
        <${IconCopyButton}>ZendeskStroke16Icon<//>
      </div>
      <${Heading} level="2">26px icons<//>
      <div class=${columnStyles}>
        <${AnswerBot26Icon} />
        <${IconCopyButton}>AnswerBot26Icon<//>
        <${App26Icon} />
        <${IconCopyButton}>App26Icon<//>
        <${ArrangeContent26Icon} />
        <${IconCopyButton}>ArrangeContent26Icon<//>
        <${ArrowRightLeft26Icon} />
        <${IconCopyButton}>ArrowRightLeft26Icon<//>
        <${BarChart26Icon} />
        <${IconCopyButton}>BarChart26Icon<//>
        <${Book26Icon} />
        <${IconCopyButton}>Book26Icon<//>
        <${BotGeneric26Icon} />
        <${IconCopyButton}>BotGeneric26Icon<//>
        <${Building26Icon} />
        <${IconCopyButton}>Building26Icon<//>
        <${CallIn26Icon} />
        <${IconCopyButton}>CallIn26Icon<//>
        <${Chat26Icon} />
        <${IconCopyButton}>Chat26Icon<//>
        <${Checkbox26Icon} />
        <${IconCopyButton}>Checkbox26Icon<//>
        <${Clipboard26Icon} />
        <${IconCopyButton}>Clipboard26Icon<//>
        <${Clock26Icon} />
        <${IconCopyButton}>Clock26Icon<//>
        <${CloudUpload26Icon} />
        <${IconCopyButton}>CloudUpload26Icon<//>
        <${CreditCard26Icon} />
        <${IconCopyButton}>CreditCard26Icon<//>
        <${Customize26Icon} />
        <${IconCopyButton}>Customize26Icon<//>
        <${Dashboard26Icon} />
        <${IconCopyButton}>Dashboard26Icon<//>
        <${Ellipsis26Icon} />
        <${IconCopyButton}>Ellipsis26Icon<//>
        <${FileDocument26Icon} />
        <${IconCopyButton}>FileDocument26Icon<//>
        <${FileError26Icon} />
        <${IconCopyButton}>FileError26Icon<//>
        <${FileImage26Icon} />
        <${IconCopyButton}>FileImage26Icon<//>
        <${FilePdf26Icon} />
        <${IconCopyButton}>FilePdf26Icon<//>
        <${FilePresentation26Icon} />
        <${IconCopyButton}>FilePresentation26Icon<//>
        <${FileSpreadsheet26Icon} />
        <${IconCopyButton}>FileSpreadsheet26Icon<//>
        <${FileZip26Icon} />
        <${IconCopyButton}>FileZip26Icon<//>
        <${File26Icon} />
        <${IconCopyButton}>File26Icon<//>
        <${Garden26Icon} />
        <${IconCopyButton}>Garden26Icon<//>
        <${GridAdd26Icon} />
        <${IconCopyButton}>GridAdd26Icon<//>
        <${Headset26Icon} />
        <${IconCopyButton}>Headset26Icon<//>
        <${HelpCenter26Icon} />
        <${IconCopyButton}>HelpCenter26Icon<//>
        <${Hook26Icon} />
        <${IconCopyButton}>Hook26Icon<//>
        <${KnowledgeBase26Icon} />
        <${IconCopyButton}>KnowledgeBase26Icon<//>
        <${LineChart26Icon} />
        <${IconCopyButton}>LineChart26Icon<//>
        <${Macro26Icon} />
        <${IconCopyButton}>Macro26Icon<//>
        <${Moderation26Icon} />
        <${IconCopyButton}>Moderation26Icon<//>
        <${Monitor26Icon} />
        <${IconCopyButton}>Monitor26Icon<//>
        <${Organization26Icon} />
        <${IconCopyButton}>Organization26Icon<//>
        <${Person26Icon} />
        <${IconCopyButton}>Person26Icon<//>
        <${Platform26Icon} />
        <${IconCopyButton}>Platform26Icon<//>
        <${Play26Icon} />
        <${IconCopyButton}>Play26Icon<//>
        <${RelationshapeChat26Icon} />
        <${IconCopyButton}>RelationshapeChat26Icon<//>
        <${RelationshapeConnect26Icon} />
        <${IconCopyButton}>RelationshapeConnect26Icon<//>
        <${RelationshapeExplore26Icon} />
        <${IconCopyButton}>RelationshapeExplore26Icon<//>
        <${RelationshapeGather26Icon} />
        <${IconCopyButton}>RelationshapeGather26Icon<//>
        <${RelationshapeGuide26Icon} />
        <${IconCopyButton}>RelationshapeGuide26Icon<//>
        <${RelationshapeMessage26Icon} />
        <${IconCopyButton}>RelationshapeMessage26Icon<//>
        <${RelationshapeSell26Icon} />
        <${IconCopyButton}>RelationshapeSell26Icon<//>
        <${RelationshapeSupport26Icon} />
        <${IconCopyButton}>RelationshapeSupport26Icon<//>
        <${RelationshapeTalk26Icon} />
        <${IconCopyButton}>RelationshapeTalk26Icon<//>
        <${Search26Icon} />
        <${IconCopyButton}>Search26Icon<//>
        <${Security26Icon} />
        <${IconCopyButton}>Security26Icon<//>
        <${Shapes26Icon} />
        <${IconCopyButton}>Shapes26Icon<//>
        <${Sunshine26Icon} />
        <${IconCopyButton}>Sunshine26Icon<//>
        <${UserLock26Icon} />
        <${IconCopyButton}>UserLock26Icon<//>
        <${Widget26Icon} />
        <${IconCopyButton}>Widget26Icon<//>
        <${Workflow26Icon} />
        <${IconCopyButton}>Workflow26Icon<//>
        <${Zendesk26Icon} />
        <${IconCopyButton}>Zendesk26Icon<//>
      </div>
      <${Heading} level="2">26px icons (fill)<//>
      <div class=${columnStyles}>
        <${CustomerListsFill26Icon} />
        <${IconCopyButton}>CustomerListsFill26Icon<//>
        <${EmailFill26Icon} />
        <${IconCopyButton}>EmailFill26Icon<//>
        <${GroupFill26Icon} />
        <${IconCopyButton}>GroupFill26Icon<//>
        <${HomeFill26Icon} />
        <${IconCopyButton}>HomeFill26Icon<//>
        <${SettingsFill26Icon} />
        <${IconCopyButton}>SettingsFill26Icon<//>
        <${ViewsFill26Icon} />
        <${IconCopyButton}>ViewsFill26Icon<//>
      </div>
      <${Heading} level="2">26px icons (wordmark)<//>
      <div class=${columnStyles}>
        <${WordmarkBoldSuite26Icon} />
        <${IconCopyButton}>WordmarkBoldSuite26Icon<//>
        <${WordmarkBoldSupport26Icon} />
        <${IconCopyButton}>WordmarkBoldSupport26Icon<//>
        <${WordmarkCapitalSuite26Icon} />
        <${IconCopyButton}>WordmarkCapitalSuite26Icon<//>
        <${WordmarkCapitalThe26Icon} />
        <${IconCopyButton}>WordmarkCapitalThe26Icon<//>
        <${WordmarkCapitalZendesk26Icon} />
        <${IconCopyButton}>WordmarkCapitalZendesk26Icon<//>
        <${WordmarkChat26Icon} />
        <${IconCopyButton}>WordmarkChat26Icon<//>
        <${WordmarkConnect26Icon} />
        <${IconCopyButton}>WordmarkConnect26Icon<//>
        <${WordmarkExplore26Icon} />
        <${IconCopyButton}>WordmarkExplore26Icon<//>
        <${WordmarkGarden26Icon} />
        <${IconCopyButton}>WordmarkGarden26Icon<//>
        <${WordmarkGather26Icon} />
        <${IconCopyButton}>WordmarkGather26Icon<//>
        <${WordmarkGuide26Icon} />
        <${IconCopyButton}>WordmarkGuide26Icon<//>
        <${WordmarkHelpCenter26Icon} />
        <${IconCopyButton}>WordmarkHelpCenter26Icon<//>
        <${WordmarkInbox26Icon} />
        <${IconCopyButton}>WordmarkInbox26Icon<//>
        <${WordmarkMessage26Icon} />
        <${IconCopyButton}>WordmarkMessage26Icon<//>
        <${WordmarkMessaging26Icon} />
        <${IconCopyButton}>WordmarkMessaging26Icon<//>
        <${WordmarkReach26Icon} />
        <${IconCopyButton}>WordmarkReach26Icon<//>
        <${WordmarkSell26Icon} />
        <${IconCopyButton}>WordmarkSell26Icon<//>
        <${WordmarkSunshine26Icon} />
        <${IconCopyButton}>WordmarkSunshine26Icon<//>
        <${WordmarkSupport26Icon} />
        <${IconCopyButton}>WordmarkSupport26Icon<//>
        <${WordmarkTalk26Icon} />
        <${IconCopyButton}>WordmarkTalk26Icon<//>
        <${WordmarkZendesk26Icon} />
        <${IconCopyButton}>WordmarkZendesk26Icon<//>
      </div>
    `;
  }
}

export default IconsPage;
