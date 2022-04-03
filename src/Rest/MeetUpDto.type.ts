type MeetUpDto = {
  readonly objectId: string;
  readonly address: string;
  readonly contactEmail: string;
  readonly subtitle: string;
  readonly imageUrl: string;
  readonly description: string;
  readonly title: string;
  readonly isFavorite: boolean;
  readonly createdAt: string;
  readonly updatedAt: string;
};

export default MeetUpDto;
