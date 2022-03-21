// SPDX-License-Identifier: MIT
pragma solidity 0.5.16;

contract KubitContract {
  // Keep track of total number of videos in contract
  uint256 public videoCount =  0;

  // Data structure to store videos data
  struct Video {
    uint256 id; 
    string hash;
    string title;
    string thumbnail;
    string description;
    uint256 donationAmount;
    address payable author;
  }

  mapping(uint256 => Video) public videos;

  // Event emitted when video is created
  event VideoCreated(
    uint256 id,
    string hash,
    string title,
    string thumbnail,
    string description,
    uint256 donationAmount,
    address payable author
  );

  // Event emitted when an there is a donation
  event DonateVideo(
    uint256 id,
    string hash,
    string title,
    string thumbnail,
    string description,
    uint256 donationAmount,
    address payable author
  );

// Create an Video
function uploadVideo(string memory _vidHash, string memory _title, string memory _thumbnail, string memory _description) public {
  require(bytes(_vidHash).length > 0);
  require(bytes(_title).length > 0);
  require(bytes(_thumbnail).length > 0);
  require(bytes(_description).length > 0);
  require(msg.sender != address(0x0));
  videoCount++;
  videos[videoCount] = Video(
    videoCount,
    _vidHash,
    _title,
    _thumbnail,
    _description,
    0,
    msg.sender
  );
  emit VideoCreated(videoCount, _vidHash, _title, _thumbnail, _description, 0, msg.sender);
}

function donateVideoOwner(uint256 _id) public payable {
  require(_id > 0 && _id <= videoCount);

  Video memory _video = videos[_id];
  address payable _author = _video.author;
  address(_author).transfer(msg.value);
  _video.donationAmount = _video.donationAmount + msg.value;
  videos[_id] = _video;

  emit DonateVideo(
    _id,
    _video.hash,
    _video.title,
    _video.thumbnail,
    _video.description,
    _video.donationAmount,
    _author
  );
}
}

